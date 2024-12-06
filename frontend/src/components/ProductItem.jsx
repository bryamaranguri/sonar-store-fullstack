import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name, price}) => {

    const { currency } = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className=' overflow-hidden w-48 h-80 flex items-center justify-center bg-[#f6f6f6] rounded-sm'>
        <img className='hover:scale-125 transition ease-in-out object-cover h-full w-auto filter drop-shadow-2xl  ' src={image[0]} alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm lora-regular' >{name}</p>
      <p className='text-sm font-medium'>{ currency } {price}</p>
    </Link>
  )
}

export default ProductItem
