import express from "express";
import * as controller from "../controllers/game-controller.mjs";
import { authMiddleware } from "../middleware/authorization.mjs";
const router = express.Router();

router.get("/", controller.getGames);
router.get("/detail", controller.getGamesDetailed);
router.get("/:id", controller.getGameById);
router.get("/detail/:id", controller.getGameByIdDetailed);
router.get("/stats/:id", controller.getGameStatsById);
router.post("/", controller.postGame);
router.put("/:id", controller.updateGame);
router.delete("/:id", controller.deleteGame);

export default router;
