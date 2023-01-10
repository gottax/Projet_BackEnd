const { Post, User } = require("./models");
const route = new Router(); 


route.get(route_path, async (req, res) => {
    
   
    const users_Count = await User.count();
    const Comment_Count = await Comment.count();

  
    res.send(
        "Notre plateforme possède" + Comment_Count + "commentaire sur la plateforme! <br>" +
        "Ainsi que " + users_Count + " comptes enregistré(s)"
    );
});

module.exports = router;
