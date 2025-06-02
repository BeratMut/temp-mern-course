import { Router } from "express";
import { login, register } from "../controllers/authController.js";
import {
  validateRegisterInput,
  validateLoginInput,
  logout,
} from "../middleware/validationMiddleware.js";

const router = Router();

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);

export default router;
