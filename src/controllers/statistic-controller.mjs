import Statistic from "../models/statistic-model.mjs";

const getStatistics = async (req, res, next) => {
  const result = await Statistic.findAll();
  res.json({ statistics: result });
};

const getStatisticById = async (req, res, next) => {
  const id = req.params.id;
  const result = await Statistic.findByPk(id);
  res.json({ statistic: result });
};

const postStatistic = async (req, res, next) => {
  const result = await Statistic.create({
    goals: req.body.goals,
    assists: req.body.assists,
    playerId: req.body.playerId,
    gameId: req.body.gameId,
  });
  res.json({ message: "New statistic created", statistic: result });
};

const updateStatistic = async (req, res, next) => {
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
};

const deleteStatistic = async (req, res, next) => {
  const id = req.params.id;
  const result = await Statistic.destroy({ where: { id: id } });
  res.json({
    message: result === 0 ? "Statistic not deleted" : "Statistic deleted",
    result: result,
  });
};

export {
  getStatistics,
  getStatisticById,
  postStatistic,
  updateStatistic,
  deleteStatistic,
};
