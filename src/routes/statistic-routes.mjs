import express from "express";
import * as controller from "../controllers/statistic-controller.mjs";
const router = express.Router();

router.get("/", controller.getStatistics);
router.get("/:id", controller.getStatisticById);
router.post("/", controller.postStatistic);
router.put("/:pid&:gid", controller.updateStatistic);
router.delete("/:id", controller.deleteStatistic);

export default router;
