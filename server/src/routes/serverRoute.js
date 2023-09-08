import express from "express";
import {
  createServer,
  getServerUser,
} from "../controllers/serverController.js";

const router = express.Router();

router.get("/server/:id", getServerUser);
router.post("/server", createServer);

export default router;
