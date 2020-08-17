import Statistic from "../models/statistic-model.mjs";

const getStatistics = async (req, res, next) => {
  try {
    const result = await Statistic.findAll();
    res.json({ statistics: result });
  } catch (err) {
    next(new Error(err));
  }
};

const getStatisticById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Statistic.findByPk(id);
    res.json({ statistic: result });
  } catch (err) {
    next(new Error(err));
  }
};

const postStatistic = async (req, res, next) => {
  try {
    const result = await Statistic.create({
      goals: req.body.goals,
      assists: req.body.assists,
      playerId: req.body.playerId,
      gameId: req.body.gameId,
    });
    res.json({ message: "New statistic created", statistic: result });
  } catch (err) {
    next(new Error(err));
  }
};

const updateStatistic = async (req, res, next) => {
  try {
    const result = await Statistic.update(
      {
        goals: req.body.goals,
        assists: req.body.assists,
      },
      { where: { playerId: req.params.pid, gameId: req.params.gid } }
    );
    res.json({
      message: result[0] === 0 ? "Statistic not updated" : "Statistic updated",
      result: result,
    });
  } catch (err) {
    next(new Error(err));
  }
};

const deleteStatistic = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Statistic.destroy({
      where: { playerId: req.params.pid, gameId: req.params.gid },
    });
    res.json({
      message: result === 0 ? "Statistic not deleted" : "Statistic deleted",
      result: result,
    });
  } catch (err) {
    next(new Error(err));
  }
};

const getStatisticsByPlayerId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Statistic.findAll({
      where: { playerId: id },
    });
    res.json({ stats: result });
  } catch (err) {
    next(new Error(err));
  }
};

const getStatisticsByGameId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Statistic.findAll({
      where: { gameId: id },
    });
    res.json({ stats: result });
  } catch (err) {
    next(new Error(err));
  }
};

export {
  getStatistics,
  getStatisticById,
  postStatistic,
  updateStatistic,
  deleteStatistic,
  getStatisticsByPlayerId,
  getStatisticsByGameId,
};
