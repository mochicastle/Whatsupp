import express from "express";
import objection from "objection";
const { ValidationError } = objection;

import { Regular } from "../../../models/index.js";
import cleanUserInput from "../../../services/cleanUserInput.js";

const regularsRouter = new express.Router();

regularsRouter.get("/", async (req, res) => {
  try {
    const regulars = await Regular.query().where({ userId: req.query.userId });
    return res.status(200).json({ regulars });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

regularsRouter.post("/", async (req, res) => {
  const { body } = req;
  const data = {
    ...body,
    userId: req.user.id,
  };
  const formInput = cleanUserInput(data);

  try {
    const newRegular = await Regular.query().insertAndFetch(formInput);
    return res.status(201).json({ newRegular });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

export default regularsRouter;
