import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { routes } from "./src/router.js";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

server.use("/api/v1", routes);

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    server.listen(PORT, () =>
      console.log(`server up and running on port ${PORT}`)
    )
  )
  .catch((err) => console.log(err));
