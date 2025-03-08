import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./db";
import { userRouter } from "./users/users.controller";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);

const PORT = process.env.PORT || 4000;
AppDataSource.initialize().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});