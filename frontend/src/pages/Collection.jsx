import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter , setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))

    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes (e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev, e.target.value])
    }

  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search ) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if(subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)

  }

  const sortProduct = (e) => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;

    }

  }


  useEffect(() => {
    applyFilter();

  },[category, subCategory, search, showSearch, products])

  useEffect(() => {
    sortProduct();

  },[sortType])




  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t text-[#e8e0da]' >

      {/* Opciones de Filtros */}
      <div className='min-w-60 bg-gradient-to-r from-[#435151] to-[#152213] p-8 shadow-lg rounded-t-md rounded-b-md '>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-2xl flex items-center cursor-pinter gap-2' >FILTROS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : '' }`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* Categorías de los filtros */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block `} >
          <p className='mb-3 text-sm font-medium' >CATEGORÍAS</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-100'>
            <p className='flex gap-2' >
              <input className='w-3' type="checkbox" value={'Guitarra'} onChange={toggleCategory}/> Guitarras Eléctricas
            </p>
            <p className='flex gap-2' >
              <input className='w-3' type="checkbox" value={'Bajo'} onChange={toggleCategory}/> Bajos Eléctricos
            </p>
            <p className='flex gap-2' >
              <input className='w-3' type="checkbox" value={'Acustico'} onChange={toggleCategory}/> Inst. Acústicos
            </p>
          </div>
        </div>
        {/* Filtros de Subcategorías */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block `} >
          <p className='mb-3 text-sm font-medium' >MARCAS</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-100'>
            <p className='flex gap-2' >
              <input className='w-3' type="checkbox" value={'Fender'} onChange={toggleSubCategory} /> Fender
            </p>
            <p className='flex gap-2' >
              <input className='w-3' type="checkbox" value={'Gibson'} onChange={toggleSubCategory} /> Gibson
            </p>
            <p className='flex gap-2' >
              <input className='w-3' type="checkbox" value={'Ibanez'} onChange={toggleSubCategory} /> Ibanez
            </p>
          </div>
        </div>

      </div>


      {/* Lado Derecho */}
      <div className='flex-1' >
        <div className='flex justify-between text-base sm:text-2xl mb-4' >
          <Title text1={'TODOS LOS'} text2={'INSTRUMENTOS'} />
          {/* Ordenar por: */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-white text-sm px-2 bg-black'>
            <option value="relevant">Ordenar por: Importancia</option>
            <option value="low-high">Ordenar por: Precio bajo a alto</option>
            <option value="high-low">Ordenar por: Precio alto a bajo</option>
          </select>
        </div>

      {/* Mapear Productos */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6' >
        {
          filterProducts.map((item, index)=>(
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))
        }
      </div>

      </div>



    </div>
  )
}

export default Collection
