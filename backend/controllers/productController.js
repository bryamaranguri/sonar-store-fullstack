import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js';
import dotenv from 'dotenv';

dotenv.config();

// Función para agregar un producto
const addProduct = async (req, res) => {
  try {

    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    });

    // FIXME: Cambiar sizes
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

    console.log('Images:', images);


    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path,{resource_type: 'image'});
        return result.secure_url;
    }));

    console.log('Images URLs:', imagesUrl);

    // FIXME: Cambiar Sizes
    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === 'true' ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now()
    }

    console.log('Product Data:', productData);

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: 'Producto agregado correctamente' });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error al agregar el producto' });
  }

}



// Función para listar productos
const listProducts = async (req, res) => {

  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error al listar los productos' });
  }
}


// Función para eliminar un producto
const removeProduct = async (req, res) => {

  try {

    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error al eliminar el producto' });
  }

}


// Función para informacion de un producto
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    console.log(`Product ID received: ${productId}`); // Verificar el productId recibido

    const product = await productModel.findById(productId);
    if (!product) {
      return res.json({ success: false, message: 'Producto no encontrado' });
    }

    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error al obtener la información del producto' });
  }
}

export { listProducts, addProduct, removeProduct, singleProduct };
