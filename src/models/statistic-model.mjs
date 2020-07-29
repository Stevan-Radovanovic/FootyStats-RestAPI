import Sequelize from "sequelize";
import sequelize from "../database/database.mjs";
import Game from "./game-model.mjs";
import Player from "./player-model.mjs";

const Statistic = sequelize.define("statistic", {
  gameId: {
    type: Sequelize.INTEGER,
    references: {
      model: Game,
      key: "id",
    },
  },
  playerId: {
    type: Sequelize.INTEGER,
    references: {
      model: Player,
      key: "id",
    },
  },
  goals: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  assists: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

export default Statistic;
