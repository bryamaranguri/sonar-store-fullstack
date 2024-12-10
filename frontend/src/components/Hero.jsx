import { assets } from "../assets/assets"

const Hero = () => {
  return (
    <section className="hero-sec" >
      <div className="single-item">
        <div className="slide" data-color= "#afafaf" data-path="polygon" >
          <img src={assets.hero_img} alt="" />
          <div className="slide-text">
            <h1 className='lora-regular text-9xl sm-py-3 lg:text-9xl leading-relaxed text-[#11100f] text-shadow-light'>Exclusividad Musical</h1>
            <p className='font-semibold text-sm md:text-base text-shadow-dark underline text-[#efe9e1]'> VER CATÁLOGO</p>
          </div>
        </div>

        <div className="slide" data-color= "#e8e0da" >
          <img src={assets.hero_img2} alt="" />
          <div className="slide-text">
            <h1 className='lora-regular text-9xl sm-py-3 lg:text-9xl leading-relaxed text-[#e8e0da]  text-shadow-dark '>Calidad Inigualable</h1>
            <p className='font-semibold text-sm md:text-base text-shadow-light underline text-[#efe9e1] '> DESCUBRE MÁS</p>
          </div>
        </div>

        <div className="slide" data-color= "#e8e0da" >
          <img src={assets.hero_img3} alt="" />
          <div className="slide-text">
            <h1 className='lora-regular text-9xl sm-py-3 lg:text-9xl leading-relaxed text-[#11100f] text-shadow-light '>Sonido Perfecto</h1>
            <p className='font-semibold text-sm md:text-base text-shadow-dark underline text-[#efe9e1]'> COMPRAR AHORA</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
