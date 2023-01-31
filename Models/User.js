const { Model, DataTypes } = require("sequelize");
const connection = require("./Database");
const bcrypt = require("bcryptjs");
const Comment = require("./Comments");
const Post = require("./Posts");
class User extends Model {}

const table_name = "user";

User.init(
  {
    
    username: {
        type: DataTypes.STRING,
        unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [1],
      },
    },
    role: {
      type: DataTypes.ENUM('USER', 'ADMIN'),
      defaultValue: 'USER'
    },
  phone_number: DataTypes.STRING,
  },
  {
    sequelize: connection,
  }
);

User.hasMany(Comment, {
    foreignKey: 'user_id',
    as: 'comments'
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    as: 'posts'
});

function hashPassword(user) {
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync());
}

User.addHook("beforeCreate", hashPassword);
User.addHook("beforeUpdate", (user, { fields }) => {
  if (fields.includes("password")) {
    hashPassword(user);
  }
});

module.exports = User;
