import express from "express";

import verifyJWT
from "../middleware/auth.middleware.js";

import {

sendMessage,

getConversation

}
from "../controllers/chat.controller.js";

const router =
express.Router();

router.post(
"/send",
verifyJWT,
sendMessage
);

router.get(
"/conversation/:userId",
verifyJWT,
getConversation
);

export default router;