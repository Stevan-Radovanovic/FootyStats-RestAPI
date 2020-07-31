import express from "express";
import * as controller from "../controllers/admin-controller.mjs";
import { authMiddleware } from "../middleware/authorization.mjs";

const router = express.Router();

router.get("/login/:name", controller.logIn);

router.get("/", authMiddleware, controller.getAdmins);
router.get("/:id", authMiddleware, controller.getAdminById);
router.get("/user/:name", authMiddleware, controller.getAdminByUserName);
router.post("/", authMiddleware, controller.postAdmin);
router.put("/:id", authMiddleware, controller.updateAdminById);
router.put("/user/:name", authMiddleware, controller.updateAdminByUserName);
router.delete("/:id", authMiddleware, controller.deleteAdminById);
router.delete("/user/:name", authMiddleware, controller.deleteAdminByUserName);

export default router;
