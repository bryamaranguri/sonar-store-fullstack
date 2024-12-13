import React, { useEffect } from 'react';
import { assets } from "../assets/assets";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Hero = () => {
  useEffect(() => {
    // Inicializa el carrusel aquí si es necesario
    $('.single-item').slick({
      infinite: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 3000,
      pauseOnFocus: false,
      pauseOnHover: false,
    });
  }, []);

  const settings = {
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  return (
    <section className="hero-sec">
      <Slider {...settings}>
        <div className="slide" data-color="#afafaf">
          <img src={assets.hero_img} className="w-full" />
          <div className="slide-text">
            <h1 className='lora-regular text-4xl sm:text-6xl lg:text-9xl leading-relaxed text-[#11100f] text-shadow-light'>Exclusividad Musical</h1>
            <p className='font-semibold text-xs sm:text-sm md:text-base text-shadow-dark underline text-[#efe9e1]'> VER CATÁLOGO</p>
          </div>
        </div>
        <div className="slide" data-color="#e8e0da">
          <img src={assets.hero_img2} alt="" />
          <div className="slide-text">
            <h1 className='lora-regular text-4xl sm:text-6xl lg:text-9xl leading-relaxed text-[#e8e0da] text-shadow-dark'>Calidad Inigualable</h1>
            <p className='font-semibold text-xs sm:text-sm md:text-base text-shadow-light underline text-[#efe9e1]'> DESCUBRE MÁS</p>
          </div>
        </div>
        <div className="slide" data-color="#e8e0da">
          <img src={assets.hero_img3} alt="" />
          <div className="slide-text">
            <h1 className='lora-regular text-4xl sm:text-6xl lg:text-9xl leading-relaxed text-[#11100f] text-shadow-light'>Sonido Perfecto</h1>
            <p className='font-semibold text-xs sm:text-sm md:text-base text-shadow-dark underline text-[#efe9e1]'> COMPRAR AHORA</p>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Hero;
