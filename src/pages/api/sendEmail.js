import Email from "@/utils/Email";


export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Obtén los datos de la solicitud
    const formData = req.body;

    try {
      // Envía el correo electrónico
      await Email(formData);

      // Envío exitoso, devuelve una respuesta con código 200 (OK)
      res.status(200).json({ message: 'Correo electrónico enviado correctamente' });
    } catch (error) {
      console.error('Error al enviar el correo electrónico', error);
      // Maneja cualquier error que ocurra durante el envío del correo electrónico
      res.status(500).json({ error: 'Ocurrió un error al enviar el correo electrónico' });
    }
  } else {
    // Si no es un método POST, devuelve una respuesta con código 405 (Method Not Allowed)
    res.status(405).json({ error: 'Método no permitido' });
  }
}