import express from "express";
import * as controller from "../controllers/bonus-controller.mjs";
import { authMiddleware } from "../middleware/authorization.mjs";
const router = express.Router();

router.get("/", controller.getBonuses);
router.get("/:id", controller.getBonusById);
router.post("/", controller.postBonus);
router.put("/:id", controller.updateBonus);
router.delete("/:id", controller.deleteBonus);
router.get("/contract/:id", controller.getBonusesByContractId);

export default router;
