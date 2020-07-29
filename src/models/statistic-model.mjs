import Sequelize from "sequelize";
import sequelize from "../database/database.mjs";

const Statistic = sequelize.define("statistic", {
  goals: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  assists: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
});

export default Statistic;
