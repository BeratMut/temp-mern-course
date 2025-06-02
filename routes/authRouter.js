import { Router } from "express";
import { login, register } from "../controllers/authController.js";
import {
  validateRegisterInput,
  validateLoginInput,
  logout,
} from "../middleware/validationMiddleware.js";
import rateLimiter from "express-rate-limit";

const router = Router();

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15, // limit each IP to 100 requests per windowMs
  message: { msg: "IP rate limit exceeded, retry in 15 minutes" },
});

router.post("/register", apiLimiter, validateRegisterInput, register);
router.post("/login", apiLimiter, validateLoginInput, login);
router.get("/logout", apiLimiter, logout);

export default router;
