import express from "express";
import {
  getUser,
  getUserFriend,
  addRemoveFriend,
} from "../controllers/users.controller.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* Read */

router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriend);

/* Update */
router.get("/:id/friends", verifyToken, addRemoveFriend);

export default router;
