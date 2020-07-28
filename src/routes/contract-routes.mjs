import express from "express";
import * as controller from "../controllers/contract-controller.mjs";
const router = express.Router();

router.get("/", controller.getContracts);
router.get("/:id", controller.getContractById);
router.post("/", controller.createContract);
router.put("/:id", controller.updateContract);
router.delete("/:id", controller.deleteContract);

export default router;
