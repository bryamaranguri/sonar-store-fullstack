import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');

  const { navigate } = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t' >
      {/* ------LADO IZQUIERDO ---------- */}
      <div className=' flex flex-col gap-4 w-full sm:max-w-[480px]' >

        <div className=' text-xl sm:text- 2xl my-3' >
          <Title text1={'DETALLES DEL'} text2={'ENVÍO'} />

        </div>
        <div className=' flex gap-3' >
          <input className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Nombre' />
          <input className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Apellidos' />

        </div>
        <input className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Correo Electrónico' />
        <input className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Dirección' />
        <div className=' flex gap-3' >
          <input className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Provincia' />
          <input className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Distrito' />
        </div>
        <div className=' flex gap-3' >
          <input className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Código Postal' />
          <input className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='País' />
        </div>
        <input className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Teléfono' />

      </div>

      {/* ------- LADO DERECHO ----------------  */}
      <div className=' mt-8 ' >

        <div className=' mt-8 min-w-80' >
          <CartTotal />

        </div>
        <div className='mt-12' >
          <Title text1={'MÉTODO DE'} text2={'PAGO'} />

          {/* ------- SELECCIONAR METODO DE PAGO ------ */}
          <div className=' flex gap-3 flex-col lg:flex-row ' >
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
              <p className={` min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''} `} ></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>

            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
              <p className={` min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''} `} ></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
              <p className={` min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''} `} ></p>
              <p className=' text-gray-500 text-sm font-medium mx-4' >PAGO CONTRAENTREGA</p>
            </div>
          </div>

          <div className=' w-full text-end mt-8' >
            <button onClick={() => navigate('/orders')} className=' bg-black text-white px-16 py-3 text-sm' >HACER PEDIDO</button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default PlaceOrder
