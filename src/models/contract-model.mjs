import Sequelize from "sequelize";
import sequelize from "../database/database.mjs";

const Contract = sequelize.define(
  "contract",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    weeklySalary: {
      type: Sequelize.REAL,
      allowNull: false,
      validate: {
        isDecimal: {
          msg: "IsDecimal validation not passed for WeeklySalary",
        },
      },
    },
    startingDate: {
      type: Sequelize.DATE,
      allowNull: false,
      validate: {
        isDate: {
          msg: "IsDate validation not passed for startingDate",
        },
      },
    },
    endingDate: {
      type: Sequelize.DATE,
      allowNull: false,
      validate: {
        isDate: {
          msg: "IsDate validation not passed for endingDate",
        },
      },
    },
  }
  /*
  {
    validate: {
      startDateAfterEndDate() {
        if (this.startingDate.isAfter(this.endingDate)) {
          throw new Error("Start date must be before the end date.");
        }
      },
    },
  }
  */
);

export default Contract;
