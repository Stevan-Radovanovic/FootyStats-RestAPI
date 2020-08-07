import express from "express";
import * as controller from "../controllers/contract-controller.mjs";
import { authMiddleware } from "../middleware/authorization.mjs";
const router = express.Router();

router.get("/", controller.getContracts);
router.get("/detail", controller.getContractsWithPlayer);
router.get("/bonus", controller.getContractsWithBonuses);
router.get("/:id", controller.getContractById);
router.get("/detail/:id", controller.getContractByIdWithPlayer);
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
router.get("/player-active/:id", controller.getActiveContract);
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
router.post("/", controller.postContract);
router.put("/:id", controller.updateContract);
router.delete("/:id", controller.deleteContract);

export default router;
