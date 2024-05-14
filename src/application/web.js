import express from "express";
import {publicRouter} from "../route/public-api.js";
import {errorMiddleware} from "../middleware/error-middleware.js"
import cors from 'cors';
import { userRouter } from "../route/api.js";

const web = express();

export {
  web
}
web.use(cors())
web.use(express.json());
web.use(publicRouter);
web.use(errorMiddleware);
web.use(userRouter)

