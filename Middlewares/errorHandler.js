const { sequelize } = require('./models/db');
const { verify } = require('jsonwebtoken');

function errorHandler(err, req, res, next) {
 
  if (err instanceof sequelize.ValidationError) {
    return res.status(400).json({
      message: err.errors.map((e) => e.message).join(', '),
    });
  }

  
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: 'Invalid token' });
  }


  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ message: 'Token expired' });
  }

  
  next(err);
}

module.exports = errorHandler;
