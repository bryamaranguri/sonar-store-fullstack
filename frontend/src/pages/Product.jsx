import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  // FIXME: TALLA DE PRODUCTOS
  const [size, setSize] = useState('')

  const fetchProductData = async () => {

    products.map((item)=> {

      if (item._id === productId ) {
        setProductData(item)
        setImage(item.image[0])
        console.log(item);

        return null;
      }

    })

  }

  useEffect (()=> {
    fetchProductData();

  },[productId, products] )

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100' >
      {/* --------------- Datos de Producto ------------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* -------------- Imagenes de Producto ---------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row' >
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
            {
              productData.image.map((item, index)=>(
                <img onClick={()=> setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />

          </div>

        </div>

        {/* -------- Información del Producto---------- */}
        <div className='flex-1' >
          <h1 className='font-medium text-2xl mt-2' >{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2' >
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2' >(122)</p>

          </div>
          <p className='mt-5 text-3xl font-medium' > {currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5' >{productData.description}</p>
          {/* FIXME: TALLA DE INSTRUMENTOS -> MÉTODO DE ENVÍO */}
          <div className='flex flex-col gap-4 my-8' >
            <p>Método de entrega:</p>
            {/* FIXME: EDITAR COLOR NARANJA */}
            <div className='flex gap-2' >
              {productData.sizes.map((item, index)=>(
                <button onClick={()=> setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index} >{item}</button>
              ))}
            </div>

          </div>
          <button className='bg-black text-white px-8 py-3 text- sm active:bg-gray-700' >AÑADIR AL CARRITO</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1' >
            <p>Envío gratis para miembros de SonarClub</p>
            <p>Paga Seguro: Puedes pagar en línea</p>
            <p>Devoluciones Gratis: Devuelve en un plazo de 15 días</p>

          </div>
        </div>
      </div>

      {/* Descripción y Sección de Reviews */}
      <div className='mt-20' >
        <div className='flex' >
          <b className='border px-5 py-3 text-sm' >Descripción</b>
          <p className='border px-5 py-3 text-sm' >Reviews (322)</p>

        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500' >
          <p>Descubre la calidad y el sonido excepcional de nuestros instrumentos musicales, cuidadosamente seleccionados para músicos de todos los niveles, desde principiantes hasta profesionales. Cada pieza ha sido fabricada con los más altos estándares, garantizando durabilidad y un rendimiento óptimo en cada interpretación.</p>
          <p>Nuestra tienda ofrece una amplia variedad de instrumentos, desde cuerdas y vientos hasta percusión y teclados, para que encuentres el compañero perfecto para tu música. Sumérgete en nuestra colección y lleva tu pasión por la música al siguiente nivel.</p>

        </div>
      </div>

      {/* Display productos relacionados */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />



    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
