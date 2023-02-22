import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import regularsRouter from "./api/v1/regularsRouter.js"
import suggestedRestaurantRouter from "./api/v1/suggestedRestaurantRouter.js"
import wildcardRouter from "./api/v1/wildcardRouter.js"

const rootRouter = new express.Router();

rootRouter.use("/", clientRouter);
rootRouter.use("/menu", clientRouter);
rootRouter.use("/api/v1/suggested-restaurant", suggestedRestaurantRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/regulars", regularsRouter);
rootRouter.use("/api/v1/wildcard", wildcardRouter);

export default rootRouter;
