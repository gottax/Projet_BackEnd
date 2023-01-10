const { Router } = require("express");
const { User } = require("./models");
const jwt = require("jsonwebtoken");




const generateJWT = (userId) => { 

  const secret = 'secret'; 

  const expiration = '1h'; 



  return jwt.sign({ userId }, secret, { expiresIn: expiration }); 

} 

  return jwt.sign({ userId }, secret, { expiresIn: expiration }); 

} 

// Middleware to check for valid JWT in the authorization header 

const checkJwt = (req, res, next) => { 

  const token = req.headers['authorization']; 

  let userId = -1; 

  if(token) { 

    try { 

      const jwtToken = jwt.verify(token.replace('Bearer ', ''), JWT_SIGN_SECRET); 

      userId = jwtToken.userId; 

    } catch(err) { 

      res.status(401).json({ error: 'Invalid token' }); 

      return; 

    } 

  } else { 

    res.status(401).json({ error: 'No token provided' }); 

    return; 

  } 

  req.userId = userId; 

  next(); 

}; 



router.get('/user/:id/posts', checkJwt, (req, res) => { 

  if(req.userId !== parseInt(req.params.id)) { 

    res.status(401).json({ error: 'Not authorized' }); 

    return; 

  } 

});
