const { Router } = require("express");
const { User } = require("./Models");
const jwt = require("jsonwebtoken");




const generateJWT = (userId) => { 

  const secret = 'secret'; 

  const expiration = '1h'; 



  return jwt.sign({ userId }, secret, { expiresIn: expiration }); 

} 

  return jwt.sign({ User }, secret, { expiresIn: expiration }); 
 

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



Router.get('/user/:id/posts', checkJwt, (req, res) => { 

  if(req.userId !== parseInt(req.params.id)) { 

    res.status(401).json({ error: 'Not authorized' }); 

    return; 

  } 

});
