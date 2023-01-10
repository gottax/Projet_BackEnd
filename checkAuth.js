const jwt = require('jsonwebtoken');
const ROLES = require('./roles');

const checkRole = (requiredRole) => {
  return (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      }

      if (decoded.role < requiredRole) {
        return res.status(403).json({ error: 'Insufficient role' });
      }

      req.user = decoded;
      next();
    });
  };
};

module.exports = {
  checkRole,
  ROLES,
};
