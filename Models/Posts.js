const { Model, DataTypes } = require("sequelize");
const connection = require("./Database");
const bcrypt = require("bcryptjs");

class Posts extends Model {}

const table_name = "posts";

Posts.init(
  {
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
  },
     content: {
        type: DataTypes.STRING,
        allownull: false,
    },
    game_id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
  },
    user_id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
      },

    },
    
  {
    sequelize: connection,
    tableName:table_name,
  }
);

module.exports = Posts;
