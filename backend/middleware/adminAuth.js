import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {

  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({ success: false, message: 'No autorizado' });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: 'No autorizado' });
    }
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'No autorizado' });
  }
}

export default adminAuth;