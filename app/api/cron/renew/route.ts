import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendEmail } from '@/lib/email';

export async function GET(request: Request) {
  try {
    // Pengamanan sederhana (optional) bisa menggunakan secret key
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Ambil data user yang langganannya habis 3 hari lagi.
    // Misalnya kita menyimpan 'expires_at' di tabel subscriptions
    const threeDaysFromNow = new Date();
    threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);
    
    // Format YYYY-MM-DD
    const targetDateStr = threeDaysFromNow.toISOString().split('T')[0];

    const { data: subscriptions, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('status', 'active')
      // asumsikan ada kolom expires_at
      .like('expires_at', `${targetDateStr}%`); 

    if (error) {
      console.error('Supabase query error:', error);
      return NextResponse.json({ error: 'Database query failed' }, { status: 500 });
    }

    if (!subscriptions || subscriptions.length === 0) {
      return NextResponse.json({ success: true, message: 'No subscriptions expiring in 3 days.' });
    }

    let emailsSent = 0;

    for (const sub of subscriptions) {
      const emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #FF9800;">Pemberitahuan Perpanjangan Langganan</h2>
          <p>Halo <strong>${sub.name}</strong>,</p>
          <p>Masa aktif langganan Member Premium AlHiwar Anda akan berakhir dalam <strong>3 hari</strong> (pada tanggal ${new Date(sub.expires_at).toLocaleDateString('id-ID')}).</p>
          <p>Agar tetap bisa menikmati akses tanpa batas ke pembelajaran bahasa Arab, silakan lakukan perpanjangan langganan bulanan Anda sebesar <strong>Rp 37.000</strong>.</p>
          <div style="margin: 30px 0;">
            <a href="https://payment.alhiwar.click" style="background-color: #4CAF50; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Perpanjang Sekarang</a>
          </div>
          <p>Jika ada pertanyaan, silakan balas email ini.</p>
          <p>Salam hangat,<br>Tim AlHiwar</p>
        </div>
      `;

      const sent = await sendEmail(sub.email, 'Perpanjangan Langganan Member Premium AlHiwar', emailHtml);
      if (sent) emailsSent++;
    }

    return NextResponse.json({ success: true, message: `Sent ${emailsSent} renewal emails.` });
  } catch (error: any) {
    console.error('Cron error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
