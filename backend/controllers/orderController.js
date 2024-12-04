import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';
import Stripe from 'stripe';


// global variables
const currency = 'PEN';
const deliveryCharge = 0;

//gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


// Realizando pedidos utilizando el método de pago contra entrega
const placeOrder = async (req, res) => {

  try {

    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: 'contraentrega',
      payment: false,
      date: Date.now()
    }

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, {cartData:{}})

    res.json({ success: true, message: 'Pedido realizado con éxito' });


  } catch (error) {

    console.log(error);
    res.json({ success: false, message: error.message });


  }
}


// Realizando pedidos utilizando Stripe
const placeOrderStripe = async (req, res) => {

  try {

    const { userId, items, amount, address } = req.body;
    const {origin} = req.headers;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: 'Stripe',
      payment: false,
      date: Date.now()
    }

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const line_items = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name
        },
        unit_amount: item.price * 100
      },
      quantity: item.quantity

    }))

    line_items.push({
      price_data: {
        currency: currency,
        product_data: {
          name: 'Envío'
        },
        unit_amount: deliveryCharge * 100
      },
      quantity: 1
    })

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode: 'payment',
    })

    res.json({ success: true, session_url: session.url });


  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });


  }

}

//VERIFY STRIPE
const verifyStripe = async (req, res) => {

  const {orderId, success, userId} = req.body;

  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, {payment: true});
      await userModel.findByIdAndUpdate(userId, {cartData: {}});
      res.json({success: true, message: 'Pago realizado con éxito'});

    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({success: false, message: 'Pago fallido, orden eliminada, vuelva a intentar'});
    }
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});

  }
}


// Realizando pedidos utilizando Razorpay
const placeOrderRazorpay = async (req, res) => {

}


// Información de TODOS los pedidos para panel Admin
const allOrders = async (req, res) => {

  try {

    const orders = await orderModel.find({});
    res.json({ success: true, orders});

  } catch (error) {

      console.log(error);
      res.json({ success: false, message: error.message });

  }

}


// Información del pedido de un usuario para Frontend
const userOrders = async (req, res) => {

  try {

    const { userId } = req.body;

    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });

  } catch (error) {

    console.log(error);
    res.json({ success: false, message: error.message });

  }

}


// Actualizar el estado del pedido para panel Admin
const updateStatus = async (req, res) => {

  try {

    const { orderId, status } = req.body;

    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({success: true, message: 'Estado actualizado'});

  } catch (error) {

    console.log(error);
    res.json({ success: false, message: error.message });

  }
}


export { verifyStripe, placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }

