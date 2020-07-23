import Player from "../models/player.mjs";

const getPlayers = async (req, res, next) => {
  const players = await Player.findAll();
  console.log(players);
};

const getPlayerById = async (req, res, next) => {
  const id = req.params.id;
  const player = await Player.findById(id);
  console.log(player);
};

const createPlayer = async (req, res, next) => {
  const player = await Player.create({
    fullName: req.body.fullName,
    number: req.body.number,
    position: req.body.position,
    dateOfBirth: req.body.dateOfBirth,
  });
  console.log(player);
};

export { getPlayers, getPlayerById, createPlayer };
