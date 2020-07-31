import express from "express";
import * as controller from "../controllers/bonus-controller.mjs";
import { authMiddleware } from "../middleware/authorization.mjs";
const router = express.Router();

router.get("/", controller.getBonuses);
router.get("/:id", controller.getBonusById);
router.post("/", authMiddleware, controller.postBonus);
router.put("/:id", authMiddleware, controller.updateBonus);
router.delete("/:id", authMiddleware, controller.deleteBonus);

export default router;
