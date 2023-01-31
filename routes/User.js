
const { Router } = require("express");
const { User } = require("../Models");


const checkAuth = require("../middlewares/checkAuth");
const checkRole = require("../middlewares/checkRole");
const router = new Router(); 
const route_path = "/user" ; 

router.get(route_path, (req, res) => {
    res.send("Page concernant les utilisateurs");
});

router.get(route_path + "/:id", checkAuth(), checkRole(checkRole.ROLES.ADMIN), async (req, res) => {

    const user = await User.findByPk(parseInt(req.params.id), {
        attributes: {
            exclude: ["password"]
        },
    });

    if (user) {
        res.type('json').send(JSON.stringify(user, null, 2) + '\n');
    } else {
        res.sendStatus(404);
    }
})

router.get(route_path + "s", checkAuth(), checkRole(checkRole.ROLES.ADMIN), async (req, res) => {
    const users = await User.findAll({
        where: req.query,
        attributes: {
            exclude: ["password"]
        },
    });

    if (users) {
        res.type('json').send(JSON.stringify(users, null, 2) + '\n');
    } else {
        res.sendStatus(404);
    }
})


router.post(route_path, checkAuth(), checkRole(checkRole.ROLES.ADMIN), async (req, res, next) => {
    try {
        const user = new User(req.body);

    
        await user.save({
            fields: ['last_name', 'first_name', 'is_admin', 'email', 'password', 'phone_number']
        });


        res.status(201).json(user);
    } catch(err) {
        console.log("CREATE USER ERR");
        next(err);
    }
})

router.put(route_path + "/:id", checkAuth(), checkRole(checkRole.ROLES.ADMIN), async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

       
        const [nbUpdated] = await User.update(req.body, {
            where: {
                id,
            },

            individualHooks: true,
        });

        
        if(!nbUpdated) {
            res.sendStatus(404);
        } else {
            console.log("UPDATED");
            res.json(await User.findByPk(id));
        }
    } catch(err) {
        console.log("UPDATE USER ERR");
        next(err);
    }
})

router.delete(route_path + "/:id", checkAuth(), checkRole(checkRole.ROLES.ADMIN), async (req, res, next) => {
  
    const id = parseInt(req.params.id);

   
    const nbDeleted = await User.destroy({
        where: {
            id,
        },
    });

  
    res.sendStatus(!nbDeleted ? 404 : 204);
})


module.exports = router;