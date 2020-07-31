import express from "express";
import * as controller from "../controllers/contract-controller.mjs";
import { authMiddleware } from "../middleware/authorization.mjs";
const router = express.Router();

router.get("/", authMiddleware, controller.getContracts);
router.get("/detail", authMiddleware, controller.getContractsWithPlayer);
router.get("/bonus", authMiddleware, controller.getContractsWithBonuses);
router.get("/:id", authMiddleware, controller.getContractById);
router.get("/detail/:id", authMiddleware, controller.getContractByIdWithPlayer);
router.get(
  "/bonuses/:id",
  authMiddleware,
  controller.getContractByIdWithBonuses
);
router.get(
  "/player-all/:id",
  authMiddleware,
  controller.getContractsByPlayerId
);
router.get("/player-active/:id", authMiddleware, controller.getActiveContract);
router.get(
  "/player-active/detail/:id",
  authMiddleware,
  controller.getActiveContractWithPlayer
);
router.get(
  "/player-active/bonuses/:id",
  authMiddleware,
  controller.getActiveContractWithBonuses
);
router.post("/", authMiddleware, controller.postContract);
router.put("/:id", authMiddleware, controller.updateContract);
router.delete("/:id", authMiddleware, controller.deleteContract);

export default router;
