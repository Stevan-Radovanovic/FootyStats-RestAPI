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
      validate: {
        notEmpty: {
          msg: "NotEmpty validation not passed for Description",
        },
      },
    },
    amount: {
      type: Sequelize.REAL,
      allowNull: false,
      validate: {
        isDecimal: {
          msg: "IsDecimal validation not passed for Amount",
        },
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Bonus;
