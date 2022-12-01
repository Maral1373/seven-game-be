import express from "express";

const router = express.Router();

import { allUser, postUser, findUserId } from "../controller/userController.js";

router.route("/").get(allUser).post(postUser);
router.route("/:id").get(findUserId);

export default router;
