import Player from "../models/player.mjs";

const getPlayers = async (req, res, next) => {
  const result = await Player.findAll();
  console.log(result);
};

const getPlayerById = async (req, res, next) => {
  const id = req.params.id;
  const result = await Player.findByPk(id);
  console.log(result);
};

const createPlayer = async (req, res, next) => {
  const result = await Player.create({
    fullName: req.body.fullName,
    number: req.body.number,
    position: req.body.position,
    dateOfBirth: req.body.dateOfBirth,
  });
  console.log(result);
};

const updatePlayer = async (req, res, next) => {
  const result = await Player.update(
    {
      fullName: req.body.fullName,
      number: req.body.number,
      position: req.body.position,
      dateOfBirth: req.body.dateOfBirth,
    },
    { where: { playerId: req.params.id } }
  );
  console.log(result);
};

const deletePlayer = async (req, res, next) => {
  const id = req.params.id;
  const result = await Player.destroy({ where: { playerId: id } });
  console.log(result);
};

export { getPlayers, getPlayerById, createPlayer, updatePlayer, deletePlayer };
