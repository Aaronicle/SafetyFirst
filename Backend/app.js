const express = require("express");
const { errors } = require("celebrate");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const mainRouter = require("./Routes/index");
const errorHandler = require("./Middlewares/error-handler");
const { requestLogger, errorLogger } = require("./Middlewares/logger");

const app = express();
app.use(cors());

const { PORT = 3001 } = process.env;
mongoose
  .connect("mongodb://127.0.0.1:27017/SafetyFirst_db")
  .then(() => {})
  .catch(console.error);

app.use(express.json());
app.use(requestLogger);
app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Server will crash now");
  }, 0);
});
app.use("/", mainRouter);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
