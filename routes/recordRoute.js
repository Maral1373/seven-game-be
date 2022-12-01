import express from "express";

const router = express.Router();

import {
  allRecord,
  postRecord,
  findRecordId,
} from "../controller/recordController.js";

router.route("/").get(allRecord).post(postRecord);
router.route("/:id").get(findRecordId);

export default router;
