import express from "express";

import verifyJWT
from "../middleware/auth.middleware.js";

import {
createProfile,
getMyProfile
}
from "../controllers/tenantProfile.controller.js";

const router =
express.Router();

router.post(
"/create",
verifyJWT,
createProfile
);

router.get(
"/me",
verifyJWT,
getMyProfile
);

export default router;