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

export { getPlayers, getPlayerById };
