import Sequelize from "sequelize";
import sequelize from "../database/database.mjs";

const Game = sequelize.define("contract", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  result: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  opponentName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dateOfPlaying: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

export default Game;
