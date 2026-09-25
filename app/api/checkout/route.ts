import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const { email, name, password, paymentMethod } = await request.json();

    if (!email || !name || !password || !paymentMethod) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. (Opsional) Buat user di Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        }
      }
    });

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 });
    }

    const userId = authData.user?.id;

    // 2. Simpan transaksi/langganan ke database (tabel 'subscriptions')
    const { error: dbError } = await supabase
      .from('subscriptions')
      .insert([
        {
          user_id: userId,
          email,
          name,
          payment_method: paymentMethod,
          status: 'pending',
          amount: 37000,
        }
      ]);

    if (dbError) {
      console.error('DB Error:', dbError);
      return NextResponse.json({ error: 'Gagal menyimpan data langganan' }, { status: 500 });
    }

    // 3. Kirim Email Notifikasi ke User
    const userEmailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #4CAF50;">Pendaftaran Member Premium AlHiwar</h2>
        <p>Halo <strong>${name}</strong>,</p>
        <p>Terima kasih telah mendaftar sebagai member premium AlHiwar. Pendaftaran Anda telah kami terima.</p>
        <p>Untuk mengaktifkan akun Anda, silakan selesaikan pembayaran sebesar <strong>Rp 37.000</strong> melalui metode pembayaran yang telah Anda pilih: <strong>${paymentMethod}</strong>.</p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h4 style="margin-top: 0;">Instruksi Pembayaran:</h4>
          ${paymentMethod === 'Bank Transfer' 
            ? '<p>Transfer ke Rekening BCA: <strong>1234567890</strong> a.n AlHiwar</p>' 
            : '<p>Silakan scan QRIS pada halaman pembayaran atau hubungi admin untuk mendapatkan QRIS.</p>'
          }
        </div>
        <p>Tim kami akan memverifikasi pembayaran Anda maksimal 1x24 jam.</p>
        <p>Salam hangat,<br>Tim AlHiwar</p>
      </div>
    `;
    await sendEmail(email, 'Pendaftaran Member Premium - Menunggu Pembayaran', userEmailHtml);

    // 4. Kirim Email Notifikasi ke Developer/Admin
    const adminEmail = process.env.DEVELOPER_EMAIL || process.env.EMAIL_USER || '';
    if (adminEmail) {
      const adminEmailHtml = `
        <div style="font-family: sans-serif;">
          <h2>Pendaftaran Member Baru</h2>
          <p>Ada user baru yang mendaftar dan menunggu verifikasi pembayaran:</p>
          <ul>
            <li><strong>Nama:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Metode Pembayaran:</strong> ${paymentMethod}</li>
            <li><strong>Nominal:</strong> Rp 37.000</li>
          </ul>
          <p>Harap segera verifikasi jika pembayaran telah masuk.</p>
        </div>
      `;
      await sendEmail(adminEmail, 'Verifikasi Pembayaran Member Baru - AlHiwar', adminEmailHtml);
    }

    return NextResponse.json({ success: true, message: 'Pendaftaran berhasil, silakan cek email Anda untuk instruksi pembayaran.' });
  } catch (error: any) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
