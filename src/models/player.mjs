import Sequelize from "sequelize";
import sequelize from "../database/database.mjs";

const Player = sequelize.define("player", {
  playerId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  position: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dateOfBith: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

export default Player;
