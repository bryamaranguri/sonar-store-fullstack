import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-[#e8e0da] bg-gradient-to-r from-[#152213] to-[#435151] p-8 rounded-t-lg shadow-lg  ' >

      <div>
        <img src={assets.exchange_icon} className='w-14 m-auto mb-5' alt="" />
        <p className='font-semibold' >Política de Garantía</p>
        <p className='text-white'>Cambio sin complicaciones.</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-14 m-auto mb-5' alt="" />
        <p className='font-semibold' >Política de devolución de 7 días</p>
        <p className='text-white'>Devolución gratuita de 7 días.</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-14 m-auto mb-5' alt="" />
        <p className='font-semibold' >El mejor servicio de atención al cliente</p>
        <p className='text-white'>Soporte al cliente 24/7.</p>
      </div>

    </div>
  )
}

export default OurPolicy
