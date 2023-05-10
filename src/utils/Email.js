

import nodemailer from "nodemailer";

const Email = async (formData) => {
  // Crea una instancia de transporte SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "emanuelabregu1999@gmail.com",
      pass: "ucgfkdsuqckejgvt",
    },
  });

  // Define el contenido del correo electrónico
  const mailOptions = {
    from: `${formData.name} <${formData.email}>`,
    to: "emanuelabregu1999@gmail.com",
    subject: "Nuevo formulario enviado",
    text: `Nombre: ${formData.name}\nEmail: ${formData.email}\nMensaje: ${formData.message}`,
  };

  // Envía el correo electrónico
  await transporter.sendMail(mailOptions);
};

export default Email;