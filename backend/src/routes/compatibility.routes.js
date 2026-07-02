import express from "express";

import verifyJWT
from "../middleware/auth.middleware.js";

import {
getCompatibilityScore
}
from "../controllers/compatibility.controller.js";

const router =
express.Router();

router.get(
"/:listingId",
verifyJWT,
getCompatibilityScore
);

export default router;