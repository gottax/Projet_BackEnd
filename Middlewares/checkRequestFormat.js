const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
  // Vérifier que la requête est de type JSON
  if (request.method === "POST" || request.method === "PUT") {
    if (!request.headers["content-type"]?.startsWith("application/json")) {
      return response.status(400).json({error: 'Invalid content-type'});
    }
  }
  
  // Vérifier que le token JWT est présent dans l'en-tête de la requête
  const token = request.headers.authorization;
  if (!token) {
    return response.status(401).json({error: 'Token is missing'});
  }

  try {
    // Vérifier que le token JWT est valide
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.userId = decoded.userId;
    next();
  } catch(err) {
    return response.status(401).json({error: 'Invalid token'});
  }
};
