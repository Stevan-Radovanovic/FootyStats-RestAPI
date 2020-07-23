import Player from "../models/player.mjs";

const getPlayers = async (req, res, next) => {
  const players = await Player.findAll();
  console.log(players);
};

export { getPlayers };
