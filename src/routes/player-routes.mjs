import express from "express";
import * as controller from "../controllers/player-controller.mjs";
const router = express.Router();

router.get("/", controller.getPlayers);
router.get("/:id", controller.getPlayerById);
router.post("/", controller.createPlayer);
router.put("/:id", controller.updatePlayer);
router.delete("/:id", controller.deletePlayer);

export default router;
