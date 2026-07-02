import Interest from "../models/Interest.js";
import Listing from "../models/Listing.js";

export const sendInterestRequest = async (req, res) => {
  try {
    const listing = await Listing.findById(
      req.params.listingId
    );

    if (!listing) {
      return res.status(404).json({
        success: false,
        message: "Listing not found",
      });
    }

    const alreadyExists = await Interest.findOne({
      tenant: req.user._id,
      listing: listing._id,
    });

    if (alreadyExists) {
      return res.status(400).json({
        success: false,
        message: "Request already sent",
      });
    }

    const interest = await Interest.create({
      tenant: req.user._id,
      owner: listing.owner,
      listing: listing._id,
    });

    res.status(201).json({
      success: true,
      interest,
    });
  } catch (error) {
    console.error("Send Interest Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMyRequests = async (req, res) => {
  try {
    const requests = await Interest.find({
      tenant: req.user._id,
    })
      .populate("listing")
      .populate("owner", "name email");

    res.status(200).json({
      success: true,
      requests,
    });
  } catch (error) {
    console.error("Get My Requests Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const getReceivedRequests = async (req, res) => {
  try {
    const requests = await Interest.find({
      owner: req.user._id,
    })
      .populate("tenant", "name email")
      .populate("listing");

    res.status(200).json({
      success: true,
      requests,
    });
  } catch (error) {
    console.error("Get Received Requests Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const acceptRequest = async (req, res) => {
  try {
    console.log("========== ACCEPT REQUEST ==========");
    console.log("Interest ID:", req.params.id);
    console.log("Logged In User:", req.user);

    const request = await Interest.findById(req.params.id)
      .populate("tenant")
      .populate("listing");

    console.log("Interest Request:", request);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found",
      });
    }

    request.status = "accepted";

    await request.save();

    console.log("Request accepted successfully");

    res.status(200).json({
      success: true,
      message: "Request accepted successfully",
      request,
    });
  } catch (error) {
    console.error("========== ACCEPT ERROR ==========");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const rejectRequest = async (req, res) => {
  try {
    console.log("========== REJECT REQUEST ==========");
    console.log("Interest ID:", req.params.id);
    console.log("Logged In User:", req.user);

    const request = await Interest.findById(req.params.id)
      .populate("tenant")
      .populate("listing");

    console.log("Interest Request:", request);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found",
      });
    }

    request.status = "rejected";

    await request.save();

    console.log("Request rejected successfully");

    res.status(200).json({
      success: true,
      message: "Request rejected successfully",
      request,
    });
  } catch (error) {
    console.error("========== REJECT ERROR ==========");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};