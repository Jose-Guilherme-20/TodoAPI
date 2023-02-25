const sequelize = require("../databases/pg");
const { Model, DataTypes } = require("sequelize");

const todo = sequelize.define(
  "todo",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.INTEGER,
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "todos",
    timestamps: false,
  }
);
module.exports = todo;
