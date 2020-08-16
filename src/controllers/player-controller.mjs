import Player from "../models/player-model.mjs";
import Contract from "../models/contract-model.mjs";
import Game from "../models/game-model.mjs";

const getPlayers = async (req, res, next) => {
  try {
    const result = await Player.findAll();
    res.json({ players: result });
  } catch (err) {
    next(new Error(err));
  }
};

const getPlayersWithContracts = async (req, res, next) => {
  try {
    const result = await Player.findAll({ include: Contract });
    res.json({ players: result });
  } catch (err) {
    next(new Error(err));
  }
};

const getPlayerById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Player.findByPk(id);
    res.json({ player: result });
  } catch (err) {
    next(new Error(err));
  }
};

const getPlayerStatsById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Player.findAll({
      include: Game,
      where: { id: id },
    });
    res.json({ stats: result[0].games });
  } catch (err) {
    next(new Error(err));
  }
};

const getPlayerByIdWithContracts = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Player.findByPk(id, { include: Contract });
    res.json({ player: result });
  } catch (err) {
    next(new Error(err));
  }
};

const createPlayer = async (req, res, next) => {
  try {
    const result = await Player.create({
      fullName: req.body.fullName,
      number: req.body.number,
      position: req.body.position,
      dateOfBirth: req.body.dateOfBirth,
    });
    res.json({ message: "New player created", player: result });
  } catch (err) {
    next(new Error(err));
  }
};

const updatePlayer = async (req, res, next) => {
  try {
    const result = await Player.update(
      {
        fullName: req.body.fullName,
        number: req.body.number,
        position: req.body.position,
        dateOfBirth: req.body.dateOfBirth,
      },
      { where: { id: req.params.id } }
    );
    res.json({ message: "A player has been updated", playerId: result });
  } catch (err) {
    next(new Error(err));
  }
};

const deletePlayer = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Player.destroy({ where: { id: id } });
    res.json({ message: "Player deleted", playerId: result });
  } catch (err) {
    next(new Error(err));
  }
};

export {
  getPlayers,
  getPlayerById,
  getPlayersWithContracts,
  getPlayerByIdWithContracts,
  createPlayer,
  updatePlayer,
  deletePlayer,
  getPlayerStatsById,
};
