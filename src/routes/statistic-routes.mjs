import express from "express";
import * as controller from "../controllers/statistic-controller.mjs";
import { authMiddleware } from "../middleware/authorization.mjs";
const router = express.Router();

router.get("/", controller.getStatistics);
router.get("/:id", controller.getStatisticById);
router.post("/", controller.postStatistic);
router.put("/:pid&:gid", controller.updateStatistic);
router.delete("/:id", controller.deleteStatistic);
router.get("/player-stats/:id", controller.getStatisticsByPlayerId);
router.get("/game-stats/:id", controller.getStatisticsByGameId);

export default router;
