import { useState } from 'react';
import axios from 'axios';

const NewsletterBox = () => {
  const [email, setEmail] = useState('');

    const onSubmitHandler = async (event) => {
      event.preventDefault();
      const name = email.split('@')[0];
      try {
        const response = await axios.post('https://sonar-store-backend.vercel.app/send-email', {
          to: email,
          subject: `Gracias por suscribirte a Sonar Store ${name}! 🎉`,
          html: `
            <div style="background:linear-gradient(to bottom, #c3c0b6, #ededed); padding:20px; font-size: 18px; line-height: 1.6;">
            <div style="text-align: center; padding-bottom: 20px;">
              <h1 style="font-size: 24px; color: #333;">¡Bienvenido a Sonar Store!</h1>
            </div>
            <p>¡Hola <strong>${name}</strong>! 🎉</p>
            <p>Gracias por suscribirte a nuestro boletín. Disfruta de tu envío gratuito en la primera compra. 🚚✨</p>
            <p><strong>INGRESA EL CUPÓN: BIENVENIDO25</strong></p>
            <br>
            <div style="text-align: center; padding-top: 20px;">
              <a href="https://sonarstore.vercel.app/" style="background-color: #333; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">VISITA NUESTRA TIENDA</a>
            </div>
            <br>
            <p>Saludos,<br/>El equipo de Sonar Store</p>
            <br>
            <div style="text-align: left;">
              <img src="https://res.cloudinary.com/ddsz8arbt/image/upload/f_auto,q_auto/rjr7ryjnq2uv965butw3" alt="Logo" style="max-width: 50%; height: auto; display: inline-block;" />
            </div>
            <br>
            <hr style="border: 0; border-top: 1px solid #ccc;" />
            <div style="text-align: center; padding-top: 20px;">
              <p>Síguenos en nuestras redes sociales:</p>
              <a href="https://www.facebook.com/sonarstore" style="margin: 0 10px;"><img src="https://w7.pngwing.com/pngs/991/119/png-transparent-facebook-square-brands-icon.png" alt="Facebook" style="width: 32px; height: auto;" /></a>
              <a href="https://www.instagram.com/sonarstorepe" style="margin: 0 10px;"><img src="https://e7.pngegg.com/pngimages/554/20/png-clipart-logo-computer-icons-instagram-logo-white-text-thumbnail.png" alt="Instagram" style="width: 40px; height: auto;" /></a>
            </div>
            <br>
            <div style="text-align: center; padding-top: 20px;">
              <p>Contacto: <a href="mailto:contacto@sonarstore.com">contacto@sonarstore.com</a></p>
            </div>
          </div>`,
        });
        console.log('Email sent:', response.data);
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }

  return (
    <div className='text-center' >
      <p className='text-2xl font-medium text-gray-800' >Suscríbete ahora y obtén envío gratuito</p>
      <p className='text-gray-400 mt-3'>Envío gratuito en tu primera compra </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' >
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Ingresa tu email' value={email} onChange={(event)=>setEmail(event.target.value)} required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4 font-semibold' >SUSCRIBIRSE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
