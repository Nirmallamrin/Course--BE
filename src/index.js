import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "../routes/userRoutes.js";
import   connect  from "../config/db.js";
import instructorRouter from "../routes/instructorRoutes.js";

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use("/api/v1/user", userRouter);
app.use("/api/v1/instructor", instructorRouter);

const port = 3000;
connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
