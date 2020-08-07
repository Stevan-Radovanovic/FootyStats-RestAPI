import express from "express";
import * as controller from "../controllers/player-controller.mjs";
import { authMiddleware } from "../middleware/authorization.mjs";
const router = express.Router();

router.get("/", controller.getPlayers);
router.get("/detail", controller.getPlayersWithContracts);
router.get("/detail/:id", controller.getPlayerByIdWithContracts);
router.post("/", controller.createPlayer);
router.put("/:id", controller.updatePlayer);
router.delete("/:id", controller.deletePlayer);

export default router;
