import express from "express";
import * as controller from "../controllers/admin-controller.mjs";
const router = express.Router();

router.get("/", controller.getAdmins);
router.get("/:id", controller.getAdminById);
router.get("/user/:name", controller.getAdminByUserName);
router.post("/", controller.postAdmin);
router.delete("/:id", controller.deleteAdmin);

export default router;
