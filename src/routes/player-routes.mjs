import Player from "../models/player.mjs";
import express from "express";
import * as controller from "../controllers/player-controller.mjs";
const router = express.Router();

router.get("/", controller.getPlayers);
router.get("/:id", controller.getPlayerById);
export default router;
