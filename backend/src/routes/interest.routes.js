import express from "express";

import verifyJWT
from "../middleware/auth.middleware.js";

import {
isOwner,
isTenant
}
from "../middleware/role.middleware.js";

import {

sendInterestRequest,

getMyRequests,

getReceivedRequests,

acceptRequest,

rejectRequest

}
from "../controllers/interest.controller.js";

const router =
express.Router();

router.post(
"/send/:listingId",
verifyJWT,
isTenant,
sendInterestRequest
);

router.get(
"/my-requests",
verifyJWT,
isTenant,
getMyRequests
);

router.get(
"/received",
verifyJWT,
isOwner,
getReceivedRequests
);

router.patch(
"/accept/:id",
verifyJWT,
isOwner,
acceptRequest
);

router.patch(
"/reject/:id",
verifyJWT,
isOwner,
rejectRequest
);

export default router;