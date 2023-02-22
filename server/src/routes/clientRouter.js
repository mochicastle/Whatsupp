import express from "express";
import getClientIndexPath from "../config/getClientIndexPath.js";

const router = new express.Router();

const clientRoutes = ["/", "/menu", "/suggested-restaurant", "/user-sessions/new", "/users/new", "/regulars", "/wildcard", "/wildcard/pick"];
router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath());
});

export default router;
