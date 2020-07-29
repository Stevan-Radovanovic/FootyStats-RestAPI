import Player from "../models/player-model.mjs";

//Route Checking - Works
const getPlayers = async (req, res, next) => {
  const result = await Player.findAll();
  res.json({ players: result });
};

//Route Checking - Works
const getPlayerById = async (req, res, next) => {
  const id = req.params.id;
  const result = await Player.findByPk(id);
  res.json({ player: result });
};

//Route Checking - Works
const createPlayer = async (req, res, next) => {
  const result = await Player.create({
    fullName: req.body.fullName,
    number: req.body.number,
    position: req.body.position,
    dateOfBirth: req.body.dateOfBirth,
  });
  res.json({ message: "New player created", player: result });
};

//Route Checking - Works
const updatePlayer = async (req, res, next) => {
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
};

//Route Checking - Works
const deletePlayer = async (req, res, next) => {
  const id = req.params.id;
  const result = await Player.destroy({ where: { id: id } });
  res.json({ message: "Player deleted", playerId: result });
};

export { getPlayers, getPlayerById, createPlayer, updatePlayer, deletePlayer };
