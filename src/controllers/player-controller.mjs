import Player from "../models/player-model.mjs";

//Route Checking - Works
const getPlayers = async (req, res, next) => {
  const result = await Player.findAll();
  res.json({ players: result });
};

const getPlayerById = async (req, res, next) => {
  const id = req.params.id;
  const result = await Player.findByPk(id);
  console.log(result);
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
  console.log(result);
};

const deletePlayer = async (req, res, next) => {
  const id = req.params.id;
  const result = await Player.destroy({ where: { playerId: id } });
  console.log(result);
};

export { getPlayers, getPlayerById, createPlayer, updatePlayer, deletePlayer };
