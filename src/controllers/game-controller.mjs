import Game from "../models/game-model.mjs";

const getGames = async (req, res, next) => {
  const result = await Game.findAll();
  res.json({ games: result });
};

const getGameById = async (req, res, next) => {
  const id = req.params.id;
  const result = await Game.findByPk(id);
  res.json({ game: result });
};

const postGame = async (req, res, next) => {
  const result = await Game.create({
    opponentName: req.body.opponentName,
    result: req.body.result,
    dateOfPlaying: req.body.dateOfPlaying,
  });
  res.json({ message: "New game created", game: result });
};

const updateGame = async (req, res, next) => {
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
};

const deleteGame = async (req, res, next) => {
  const id = req.params.id;
  const result = await Game.destroy({ where: { id: id } });
  res.json({
    message: result === 0 ? "Game not deleted" : "Game deleted",
    result: result,
  });
};

export { getGames, getGameById, postGame, updateGame, deleteGame };
