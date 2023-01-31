const { Router } = require("express");
const { User } = require("../Models");
const { compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const router = new Router(); 
const route_path = "/login"; 
const SECRET = process.env.JWT_SECRET || "SECRET_password";


router.post(route_path, async (req, res) => {
    
    const user = await User.findOne({
        where: {
            email: req.body.email,
        },
    });

   
    if(!user) {
        res.sendStatus(401);
    } else if (compareSync(req.body.password, user.password)) {
        res.json({
            token: sign(
                {
                    lastname: user.last_name,
                    firstname: user.first_name,
                    is_admin: user.is_admin,
                    id: user.id,
                },
                SECRET
            ),
        });
    }
    else {
        res.sendStatus(401);
    }
});

module.exports=router;