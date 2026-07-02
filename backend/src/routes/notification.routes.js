import express from "express";

import verifyJWT
from "../middleware/auth.middleware.js";

import {

getNotifications,

markNotificationRead

}
from "../controllers/notification.controller.js";

const router =
express.Router();

router.get(
"/",
verifyJWT,
getNotifications
);

router.patch(
"/:id",
verifyJWT,
markNotificationRead
);

export default router;