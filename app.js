import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import Users from "./routes/userRoute.js";
import Records from "./routes/recordRoute.js";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

app.use("/users", Users);
app.use("/records", Records);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Database connected! 😍"))
  .catch(() => console.log("Database is not connected! ☹️"));

app.listen(3000, () => console.log("The server is listening... 3000"));
