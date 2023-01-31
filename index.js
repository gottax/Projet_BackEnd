const express = require ("express");
const checkRequestFormat = require("./Middlewares/checkRequestFormat");

require("./Models/Database");


//const index_Route = require("./routes/ind");
const Comments_Route = require("./routes/Comment");
const User_Route = require("./routes/User");
const login_Route = require("./routes/Login");
const Posts_Route = require("./routes/Posts");
const Games_Route = require("./routes/Games");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(checkRequestFormat);
app.use(express.json());
//app.use(index_Route);
app.use(User_Route);
app.use(login_Route);
app.use(Comments_Route);
app.use(Posts_Route);
app.use(Games_Route);


app.listen(PORT, () => {
    console.log( "Server is listening on port " + PORT );
});
