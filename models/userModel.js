const { DataTypes, Model, UUIDV4 } = require('sequelize');
const sequelize = require("../database/dbtest");

class User extends Model { }

User.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    sequelize,
    modelName: 'User',
    tableName: "users",
    timestamps: true
  }
);

module.exports = User;