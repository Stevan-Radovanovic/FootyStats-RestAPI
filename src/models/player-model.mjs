import Sequelize from "sequelize";
import sequelize from "../database/database.mjs";

const Player = sequelize.define("player", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "NotEmpty validation not passed for FullName",
      },
    },
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isDecimal: {
        msg: "IsDecimal validation not passed for Number",
      },
    },
  },
  position: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "NotEmpty validation not passed for Position",
      },
    },
  },
  dateOfBirth: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      isDate: {
        msg: "IsDate validation not passed for DateOfBirth",
      },
    },
  },
});

export default Player;
