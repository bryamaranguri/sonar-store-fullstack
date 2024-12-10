import { assets } from "../assets/assets"

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border rounded-sm'>
      {/* Hero Lado Izquierdo */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-gradient-to-r from-[#152213] to-[#435151]'>
          <div className='text-[#e8e0da]'>
          <div className='flex items-center gap-2'>
            {/* <p className='w-8 md:w-11 h-[2px] bg-[#e8e0da]'></p> */}
            {/* <p className='font-medium text-sm md:text-base '>MÁS VENDIDOS</p> */}
          </div>
          <h1 className='lora-regular text-3xl sm-py-3 lg:text-5xl leading-relaxed text-[#e8e0da]'>Exclusividad Musical</h1>
          <div className='flex items-center gap-2 justify-end'>
            <p className='font-semibold text-sm md:text-base'> COMPRAR AHORA</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#e8e0da]'></p>

          </div>
        </div>
      </div>
      {/* Hero Lado Derecho */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero
