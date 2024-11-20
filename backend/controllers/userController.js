import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';


const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
}

// Ruta para loguear un usuario
const loginUser = async (req, res) => {

  try {
    const { email, password } = req.body;

    // Validar si el usuario existe
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: 'El usuario no existe' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    }
    else {
      res.json({ success: false, message: 'Credenciales incorrectas' });
    }

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error al loguear el usuario' });
  }
}


// Ruta para registrar un usuario

const registerUser = async (req, res) => {

  try {
    const { name, email, password } = req.body;

    // Validar si el usuario ya existe
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ succes: false, message: 'El usuario ya existe' });
    }

    // Validar formato de email y contraseña fuerte
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: 'Inserte un Email válido por favor' });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: 'La contraseña debe tener al menos 8 caracteres' });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({ success: true, token });




  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error al registrar el usuario' });
  }
}

// Ruta para loggear admin
const adminLogin = async (req, res) => {
  // const { email, password } = req.body;
  // try {
  //   const admin
  // }
  // catch (error) {
  //   console.log(error)
  // }
}


export { loginUser, registerUser, adminLogin };
