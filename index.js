const express = require("express");
const checkRequestFormat = require("./middlewares/checkRequestFormat");
const errorHandler = require("./middlewares/errorHandler");
require("./models/database");


const index_Route = require("./routes/index");
const commment_Route = require("./routes/comment");
const user_Route = require("./routes/user");
const login_Route = require("./routes/login");
const post_Route = require("./routes/post");
const vote_Route = require("./routes/vote");

const PORT = process.env.PORT || 3000; // Default: 3000 (use the process.env.PORT else use 3000 by default)
const app = express();

app.use(checkRequestFormat);
app.use(express.json());

app.use(index_Route);
app.use(user_Route);
app.use(login_Route);
app.use(comment_Route);
app.use(post_Route);
app.use(vote_Route);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(
        "Server is listening on port "
        + PORT + "\n" +
        "Server URL: http://localhost:" + PORT
    );
});
