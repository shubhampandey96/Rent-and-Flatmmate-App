import express from "express";

import verifyJWT
from "../middleware/auth.middleware.js";

import isAdmin
from "../middleware/admin.middleware.js";

import {

getDashboardStats,

getAllUsers,

deleteUser,

getAllListingsAdmin,

deleteListingAdmin,

getAllRequests,

getUserAnalytics

}
from "../controllers/admin.controller.js";

const router =
express.Router();

router.use(
verifyJWT,
isAdmin
);

router.get(
"/dashboard",
getDashboardStats
);

router.get(
"/users",
getAllUsers
);

router.delete(
"/users/:id",
deleteUser
);

router.get(
"/listings",
getAllListingsAdmin
);

router.delete(
"/listings/:id",
deleteListingAdmin
);

router.get(
"/requests",
getAllRequests
);

router.get(
"/analytics/users",
getUserAnalytics
);

export default router;