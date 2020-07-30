import Sequelize from "sequelize";
import sequelize from "../database/database.mjs";

const Game = sequelize.define("game", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  result: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: {
        args: /(([0-9])+-([0-9])+){1}/i,
        msg: "Regex validation not passed for Result",
      },
    },
  },
  opponentName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "NotEmpty validation not passed for OpponentName",
      },
    },
  },
  dateOfPlaying: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      isDate: {
        msg: "isDate validation not passed for DateOfPlaying",
      },
    },
  },
});

export default Game;
