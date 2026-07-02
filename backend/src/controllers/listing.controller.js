import Listing from "../models/Listing.js";
import uploadToCloudinary from "../services/cloudinary.service.js";
import Interest from "../models/Interest.js";

export const createListing = async (req, res) => {
    try {
        const listing = await Listing.create({
            owner: req.user._id,
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            rent: req.body.rent,
            availableFrom: req.body.availableFrom,
            roomType: req.body.roomType,
            furnishingStatus: req.body.furnishingStatus,
            images: req.body.images
        });

        res.status(201).json({
            success: true,
            listing
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getAllListings = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

        const listings = await Listing.find()
            .populate("owner", "name email")
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: listings.length,
            listings
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getSingleListing = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id)
            .populate("owner", "name email");

        if (!listing) {
            return res.status(404).json({
                success: false,
                message: "Listing not found"
            });
        }

        res.status(200).json({
            success: true,
            listing
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const updateListing = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);

        if (!listing) {
            return res.status(404).json({
                success: false,
                message: "Listing not found"
            });
        }

        if (listing.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "Unauthorized"
            });
        }

        const updated = await Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            success: true,
            updated
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteListing = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);

        if (!listing) {
            return res.status(404).json({
                success: false,
                message: "Listing not found"
            });
        }

        await listing.deleteOne();

        res.status(200).json({
            success: true,
            message: "Listing deleted"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const markFilled = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);

        if (!listing) {
            return res.status(404).json({
                success: false,
                message: "Listing not found"
            });
        }

        listing.status = "filled";
        await listing.save();

        res.status(200).json({
            success: true,
            listing
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
export const uploadListingImages = async (req, res) => {
  try {
    console.log("===== UPLOAD API HIT =====");
    console.log("FILES:", req.files);

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No files uploaded",
      });
    }

    const uploadedImages = [];

    for (const file of req.files) {
      console.log(
        "Uploading:",
        file.originalname
      );

      const result = await uploadToCloudinary(
        file.buffer
      );

      console.log(
        "Cloudinary Result:",
        result
      );

      uploadedImages.push(
        result.secure_url
      );
    }

    return res.status(200).json({
      success: true,
      images: uploadedImages,
    });
  } catch (error) {
    console.error(
      "FULL UPLOAD ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
      stack: error.stack,
    });
  }
};