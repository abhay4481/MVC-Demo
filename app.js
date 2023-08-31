import express from "express";
import userRoutes from "./routes/user.js";
import { config } from "dotenv";

export const app = express();
config({
  path: "./data/config.env",
});

app.use(express.json());
app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("Nice Working");
});
