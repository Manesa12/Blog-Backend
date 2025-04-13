import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/authController.js";

const router = express.Router();

// Use actual controller functions
router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

export default router;
