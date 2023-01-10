const { sequelize } = require('./models/db');
const { verify } = require('jsonwebtoken');

function errorHandler(err, req, res, next) {
  // Gérer les erreurs de validation de Sequelize
  if (err instanceof sequelize.ValidationError) {
    return res.status(400).json({
      message: err.errors.map((e) => e.message).join(', '),
    });
  }

  // Gérer les erreurs de type JWT
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Gérer les erreurs de vérification JWT
  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ message: 'Token expired' });
  }

  // Si aucune des erreurs ci-dessus n'est déclenchée, passer l'erreur au prochain middleware
  next(err);
}

module.exports = errorHandler;
