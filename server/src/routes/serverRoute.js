import express from "express";
import {
  createServer,
  getServerUser,
} from "../controllers/serverController.js";
import { ServerValidate } from "../middleware/validate.js";

const router = express.Router();

router.get("/server/:id/:type", getServerUser);
router.post("/server", ServerValidate, createServer);

export default router;
