import express from "express";
import * as controller from "../controllers/player-controller.mjs";
import { authMiddleware } from "../middleware/authorization.mjs";
const router = express.Router();

router.get("/", controller.getPlayers);
router.get("/detail", authMiddleware, controller.getPlayersWithContracts);
router.get("/detail/:id", controller.getPlayerByIdWithContracts);
router.post("/", authMiddleware, controller.createPlayer);
router.put("/:id", authMiddleware, controller.updatePlayer);
router.delete("/:id", authMiddleware, controller.deletePlayer);

export default router;
