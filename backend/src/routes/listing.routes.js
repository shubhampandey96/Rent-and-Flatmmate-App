import express from "express";

import verifyJWT from "../middleware/auth.middleware.js";

import { isOwner } from "../middleware/role.middleware.js";

import upload from "../middleware/upload.middleware.js";

import {
    createListing,
    getAllListings,
    getSingleListing,
    updateListing,
    deleteListing,
    markFilled,
    uploadListingImages
} from "../controllers/listing.controller.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Listing Routes
|--------------------------------------------------------------------------
*/

// Create Listing
router.post(
    "/create",
    verifyJWT,
    isOwner,
    createListing
);

// Upload Listing Images
router.post(
    "/upload-images",
    verifyJWT,
    isOwner,
    upload.array("images", 5),
    uploadListingImages
);

// Get All Listings
router.get(
    "/",
    getAllListings
);

// Get Single Listing
router.get(
    "/:id",
    getSingleListing
);

// Update Listing
router.put(
    "/:id",
    verifyJWT,
    isOwner,
    updateListing
);

// Delete Listing
router.delete(
    "/:id",
    verifyJWT,
    isOwner,
    deleteListing
);

// Mark Listing as Filled
router.patch(
    "/filled/:id",
    verifyJWT,
    isOwner,
    markFilled
);

export default router;