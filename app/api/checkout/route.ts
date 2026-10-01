import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    let { email, name, password, paymentMethod } = await request.json();
    
    // Hilangkan spasi berlebih di awal/akhir email
    if (email) email = email.trim();

    if (!email || !name || !password || !paymentMethod) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. (Opsional) Buat user di Supabase Auth
    let { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        }
      }
    });

    let userId = authData?.user?.id;

    // Jika user mungkin sudah ada (Supabase mengembalikan identities kosong untuk email yang sudah terdaftar demi keamanan)
    if (authData?.user && authData.user.identities && authData.user.identities.length === 0) {
      // Coba login untuk mendapatkan ID asli user tersebut
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (signInError) {
        return NextResponse.json({ error: 'Email ini sudah terdaftar. Silakan gunakan email lain atau masukkan kata sandi yang benar untuk akun ini.' }, { status: 400 });
      }
      userId = signInData.user?.id;
    } else if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 });
    }

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
      return NextResponse.json({ error: `Gagal menyimpan data langganan: ${dbError.message}` }, { status: 500 });
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
            ? '<p>Transfer ke Rekening <strong>BCA</strong>: <strong>5465341944</strong> a.n <strong>Ardiansyah</strong></p>' 
            : '<p>Silakan scan kode QRIS berikut untuk melakukan pembayaran:</p><br><img src="https://alhiwar.click/qris.jpg" alt="QRIS AlHiwar" style="max-width:100%; height:auto; max-height:350px; border-radius:10px;" />'
          }
        </div>
        <p>Tim kami akan memverifikasi pembayaran Anda maksimal 1x24 jam.</p>
        <p>Salam hangat,<br>Tim AlHiwar</p>
      </div>
    `;
    const emailResult = await sendEmail(email, 'Pendaftaran Member Premium - Menunggu Pembayaran', userEmailHtml);

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

    return NextResponse.json({ 
      success: true, 
      message: 'Pendaftaran berhasil, silakan cek email Anda untuk instruksi pembayaran.',
      emailError: emailResult.success ? null : emailResult.error
    });
  } catch (error: any) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
