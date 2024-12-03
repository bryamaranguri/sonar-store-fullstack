
// Realizando pedidos utilizando el método de pago contra entrega
const placeOrder = async (req, res) => {

  try {

    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      paymentMethod: 'Contraentrega',
      payment: false,
      date: Date.now()
    }

  } catch (error) {

  }
}


// Realizando pedidos utilizando Stripe
const placeOrderStripe = async (req, res) => {

}


// Realizando pedidos utilizando Razorpay
const placeOrderRazorpay = async (req, res) => {

}


// Información de TODOS los pedidos para panel Admin
const allOrders = async (req, res) => {

}


// Información del pedido de un usuario para Frontend
const userOrders = async (req, res) => {

}


// Actualizar el estado del pedido para panel Admin
const updateStatus = async (req, res) => {

}


export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }

