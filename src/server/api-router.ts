import express from "express";

const router = express.Router();

import testData from "../test-data.json";

router.get("/contests", (req, res) => {
  res.send({ contests: testData });
});

export default router;
