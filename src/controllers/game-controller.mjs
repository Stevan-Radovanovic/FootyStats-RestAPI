import Game from "../models/game-model.mjs";
import Player from "../models/player-model.mjs";

const getGames = async (req, res, next) => {
  try {
    const result = await Game.findAll();
    res.json({ games: result });
  } catch (err) {
    next(new Error(err));
  }
};

const getGamesDetailed = async (req, res, next) => {
  try {
    const result = await Game.findAll({ include: Player });
    res.json({ games: result });
  } catch (err) {
    next(new Error(err));
  }
};

const getGameById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Game.findByPk(id);
    res.json({ game: result });
  } catch (err) {
    next(new Error(err));
  }
};

const getGameByIdDetailed = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Game.findByPk(id, { include: Player });
    res.json({ game: result });
  } catch (err) {
    next(new Error(err));
  }
};

const getGameStatsById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Game.findAll({
      include: Player,
    });
    res.json({ stats: result[0].players });
  } catch (err) {
    next(new Error(err));
  }
};

const postGame = async (req, res, next) => {
  try {
    const result = await Game.create({
      opponentName: req.body.opponentName,
      result: req.body.result,
      dateOfPlaying: req.body.dateOfPlaying,
    });
    res.json({ message: "New game created", game: result });
  } catch (err) {
    next(new Error(err));
  }
};

const updateGame = async (req, res, next) => {
  try {
    const result = await Game.update(
      {
        opponentName: req.body.opponentName,
        result: req.body.result,
        dateOfPlaying: req.body.dateOfPlaying,
      },
      { where: { id: req.params.id } }
    );
    res.json({
      message: result[0] === 0 ? "Game not updated" : "Game updated",
      result: result,
    });
  } catch (err) {
    next(new Error(err));
  }
};

const deleteGame = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Game.destroy({ where: { id: id } });
    res.json({
      message: result === 0 ? "Game not deleted" : "Game deleted",
      result: result,
    });
  } catch (err) {
    next(new Error(err));
  }
};

export {
  getGames,
  getGamesDetailed,
  getGameById,
  getGameByIdDetailed,
  getGameStatsById,
  postGame,
  updateGame,
  deleteGame,
};
