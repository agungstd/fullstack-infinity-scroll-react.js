import express from "express";
import cors from "cors";
import route from "../routes/index.js";

const appMiddleware = express();

appMiddleware.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

appMiddleware.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

appMiddleware.options("*", cors());
appMiddleware.use(express.json());
appMiddleware.use(route);

export default appMiddleware;
