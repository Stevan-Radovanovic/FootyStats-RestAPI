import Sequelize from "sequelize";
import sequelize from "../database/database.mjs";

const Bonus = sequelize.define(
  "bonuses",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    amount: {
      type: Sequelize.REAL,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Bonus;
