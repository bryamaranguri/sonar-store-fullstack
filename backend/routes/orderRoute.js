import express from 'express';
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus } from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin Funcionalidades
orderRouter.post('/list', adminAuth ,allOrders);
orderRouter.post('/status', adminAuth , updateStatus);

// Payment Funcionalidades
orderRouter.post('/place', authUser , placeOrder);
orderRouter.post('/stripe', authUser , placeOrderStripe);
orderRouter.post('/razorpay', authUser , placeOrderRazorpay);


// User Funcionalidades
orderRouter.post('/userorders', authUser , userOrders);


export default orderRouter;
