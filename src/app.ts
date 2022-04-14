import express, { Application } from "express";
import cors from "cors";
import welcomeRouter from "./routes/welcome.router";
import {
  handle500Errors,
  handleCustomErrors,
  handleInvalidPaths,
  handlePSQLErrors,
} from "./errors";
import apiRouter from "./routes/api.router";

const app: Application = express();

app.use(express.json());
app.use(cors);

app.use("/", welcomeRouter);
app.use("/api", apiRouter);

app.all("/*", handleInvalidPaths);

app.use(handlePSQLErrors);
app.use(handleCustomErrors);
app.use(handle500Errors);

module.exports = app;
