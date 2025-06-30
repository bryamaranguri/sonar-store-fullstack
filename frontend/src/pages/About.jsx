import Title from "../components/Title";
import {assets} from '../assets/assets';
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>

      <div className=' text-2xl text-center pt-8 border-t' >
        <Title text1={'ACERCA DE'} text2={'NOSOTROS'} />

      </div>

      <div className=' my-10 flex flex-col md:flex-row gap-16' >
        <img className=' w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className=' flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '  >
          <p>En Sonar Store, nos enorgullece ofrecer una selección de los mejores instrumentos musicales del mercado, cuidadosamente elegidos para satisfacer a los músicos más exigentes. Desde nuestra tienda física en Trujillo, Perú, hemos construido una reputación como un referente para aquellos que buscan excelencia en cada nota. Ahora, extendemos nuestra pasión y experiencia a nuestra tienda en línea, llevando la misma calidad, rendimiento y diseño excepcional directamente a tu hogar. </p>
          <p>Desde instrumentos de cuerda y viento hasta percusión y teclados, nuestro compromiso es brindarte una experiencia de compra elegante y sofisticada. Estamos aquí para inspirar y apoyar a músicos de todos los niveles, proporcionando las herramientas que necesitan para llevar su pasión por la música al siguiente nivel, tanto si nos visitas en Trujillo como si exploras nuestra colección online.</p>
          <b className='text-gray-800' >NUESTRA MISIÓN</b>
          <p>Nuestra misión es ofrecer a músicos de todos los niveles los mejores instrumentos y equipos del mercado, con un enfoque en calidad, innovación y servicio excepcional. Buscamos inspirar la creatividad y apoyar el desarrollo musical, proporcionando las herramientas ideales para que cada músico alcance su máximo potencial.</p>

        </div>


      </div>
      <div className=' text-xl py-4' >
          <Title text1={'¿POR QUÉ'} text2={'ELEGIRNOS?'} />

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20' >
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b>Calidad Asegurada:</b>
          <p className=' text-gray-600 ' >Ofrecemos una selección de los mejores instrumentos del mercado, garantizando un sonido excepcional y una durabilidad que satisface a los músicos más exigentes.</p>
        </div>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b>Experiencia Satisfactoria:</b>
          <p className=' text-gray-600 ' >Nuestra tienda proporciona un entorno de compra sofisticado y personalizado, con atención al detalle y un servicio al cliente que eleva la experiencia de cada músico.</p>
        </div>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b>Compromiso con la Satisfacción del Cliente:</b>
          <p className=' text-gray-600 ' >Nos dedicamos a brindar un servicio excepcional, desde la asesoría experta en la elección del instrumento adecuado hasta un proceso de compra sin complicaciones, garantizando la satisfacción y confianza de nuestros clientes.</p>
        </div>


      </div>
      <NewsletterBox />


    </div>
  )
}

export default About
