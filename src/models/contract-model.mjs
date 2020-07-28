import Sequelize from "sequelize";
import sequelize from "../database/database.mjs";

const Contract = sequelize.define("contract", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  weeklySalary: {
    type: Sequelize.REAL,
    allowNull: false,
  },
  startingDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  endingDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

export default Contract;
