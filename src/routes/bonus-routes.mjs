import express from "express";
import * as controller from "../controllers/bonus-controller.mjs";
const router = express.Router();

router.get("/", controller.getBonuses);
router.get("/:id", controller.getBonusById);
router.post("/", controller.postBonus);
router.put("/:id", controller.updateBonus);
router.delete("/:id", controller.deleteBonus);

export default router;
