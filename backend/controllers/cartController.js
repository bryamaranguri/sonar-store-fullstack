import userModel from '../models/userModel.js';


//FIXME: Corregir size
// AGREGAR PRODUCTOS AL CARRITO DEL USUARIO
const addToCart = async (req, res) => {
  try {

    const { userId, itemId , size } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;

      }
      else {
        cartData[itemId][size] = 1;
      }

    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: 'Producto agregado al carrito' });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message});
  }
}


// ACTUALIZAR CARRITO DEL USUARIO
const updateCart = async (req, res) => {
  try {

    const { userId, itemId , size, quantity } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: 'Carrito actualizado' });



  } catch (error) {

    console.log(error);
    res.json({ success: false, message: error.message});
  }
}


// CONSEGUIR DATOS DEL CARRITO DEL USUARIO
const getUserCart = async (req, res) => {

  try {

    const { userId } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    res.json({ success: true, cartData });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message});
  }

}

export { addToCart, updateCart, getUserCart }
