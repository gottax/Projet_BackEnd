const { Model, DataTypes } = require("sequelize");
const connection = require("./Database");

class Games extends Model {}

const table_name = "games";

Games.init(
  {
     game_name: {
        type: DataTypes.STRING,
        unique: true
    },
    release_date: {
      type: DataTypes.DATE,
      unique: true,
      },
      platform_ENUM: {
      type: DataTypes.STRING,
     allowNull: false,
      },
      genre_ENUM: {
        type: DataTypes.STRING,
       allowNull: false,
        },
    },
    
  {
    sequelize: connection,
    tableName: table_name,
  }
);

module.exports = Games;
