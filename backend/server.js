import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import nodemailer from 'nodemailer';

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()


// Middlewares
app.use(express.json())
app.use(cors())

// Nodemailer Config
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  // host: 'smtp.office365.com', // Servidor SMTP de Outlook
  // port: 587, // Puerto SMTP
  // secure: false, // Debe ser falso para STARTTLS
  // auth: {
  //   user: process.env.EMAIL_USER, // Tu dirección de correo de Outlook
  //   pass: process.env.EMAIL_PASS, // Contraseña del correo
  // },
});

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);


app.get('/', (req, res) => {
  res.status(200).send('API working')

})

app.post('/send-email', (req, res) => {
  const { to, subject, html } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email: ' + error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
