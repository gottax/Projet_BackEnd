const { Model, DataTypes } = require("sequelize");
const connection = require("./Database");
const bcrypt = require("bcryptjs");

class Comments extends Model {}

const table_name = "comments";

Comments.init(
  {
    names:{
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
     content: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    post_id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      },
    user_id: {
      type: DataTypes.INTEGER,
      unique: true,
     allowNull: false,
      },
    },
    
  {
    sequelize: connection,
    tableName:table_name,
  }
);

module.exports = Comments;
