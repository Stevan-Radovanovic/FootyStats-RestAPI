import express from "express";
import * as controller from "../controllers/admin-controller.mjs";
import { authMiddleware } from "../middleware/authorization.mjs";

const router = express.Router();

router.get("/login/:name", controller.logIn);

router.get("/", controller.getAdmins);
router.get("/:id", controller.getAdminById);
router.get("/user/:name", controller.getAdminByUserName);
router.post("/", controller.postAdmin);
router.put("/:id", controller.updateAdminById);
router.put("/user/:name", controller.updateAdminByUserName);
router.delete("/:id", controller.deleteAdminById);
router.delete("/user/:name", controller.deleteAdminByUserName);

export default router;
