import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, enterprise, phone, email, mesagge } = await req.json();

    // Configuración del transporte SMTP
    const transporter = nodemailer.createTransport({
      host: 'mail.consorcioimovs.com.mx',
      port: 465, // Usa 587 si prefieres STARTTLS
      secure: true, // true para 465, false para otros puertos
      auth: {
        user: process.env.EMAIL_USER, // tu correo electrónico
        pass: process.env.EMAIL_PASS, // tu contraseña o app password
      },
    });

    // Enviar correo con los datos del formulario
    await transporter.sendMail({
      from: `"Formulario de Contacto" <${process.env.EMAIL_USER}>`, // Remitente del correo
      to: process.env.EMAIL_USER, // Destinatario (el correo configurado en nodemailer)
      subject: `Nuevo mensaje de ${name} (${enterprise})`, // Asunto del correo
      html: `
        <p>Has recibido un nuevo mensaje a través de tu formulario de contacto:</p>
        <ul>
          <li><strong>Nombre:</strong> ${name}</li>
          <li><strong>Empresa:</strong> ${enterprise}</li>
          <li><strong>Teléfono:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Mensaje:</strong> ${mesagge}</li>
        </ul>
      `,
    });

    // Enviar correo de agradecimiento al usuario
    await transporter.sendMail({
      from: `"Nombre de Tu Empresa" <${process.env.EMAIL_USER}>`, // Remitente del correo
      to: email, // Destinatario (el correo del usuario que llenó el formulario)
      subject: 'Gracias por contactarnos', // Asunto del correo
      html: `
        <p>Hola ${name},</p>
        <p>Gracias por ponerte en contacto con nosotros. Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
        <p>Atentamente,<br>Nombre de Tu Empresa</p>
      `,
    });

    return new Response(JSON.stringify({ message: 'Correos enviados con éxito' }), { status: 200 });
  } catch (error) {
    console.error('Error enviando los correos:', error.message);
    return new Response(JSON.stringify({ message: 'Error enviando los correos', error: error.message }), { status: 500 });
  }
}
