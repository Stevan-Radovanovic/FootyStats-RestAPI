import express from "express";
import * as controller from "../controllers/statistic-controller.mjs";
import { authMiddleware } from "../middleware/authorization.mjs";
const router = express.Router();

router.get("/", controller.getStatistics);
router.get("/:id", controller.getStatisticById);
router.post("/", authMiddleware, controller.postStatistic);
router.put("/:pid&:gid", authMiddleware, controller.updateStatistic);
router.delete("/:id", authMiddleware, controller.deleteStatistic);

export default router;
