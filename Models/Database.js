const Sequelize = require("sequelize");
const sqlUrl = process.env.DATABASE_URL || "mysql://root:root@localhost:3306/database";
const connection = new Sequelize(sqlUrl, {
    define: {
        timestamps: false
    }
});
connection.authenticate().then(() => console.log("database conncetd!"));
module.exports = connection;