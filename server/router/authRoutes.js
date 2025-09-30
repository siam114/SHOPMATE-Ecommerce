import { express } from "express";
import {
  getUser,
  login,
  logout,
  register,
} from "../controllers/authController";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", getUser);

export default router;
