import TenantProfile from "../models/TenantProfile.js";

// Create or Update Profile
export const createProfile = async (req, res) => {
  try {
    const profile = await TenantProfile.findOneAndUpdate(
      { user: req.user._id },
      {
        preferredLocation: req.body.preferredLocation,
        minBudget: req.body.minBudget,
        maxBudget: req.body.maxBudget,
        moveInDate: req.body.moveInDate,
        lifestyle: req.body.lifestyle,
        occupation: req.body.occupation,
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Profile saved successfully",
      profile,
    });
  } catch (error) {
    console.error("Profile Save Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Logged-in User Profile
export const getMyProfile = async (req, res) => {
  try {
    const profile = await TenantProfile.findOne({
      user: req.user._id,
    });

    res.status(200).json({
      success: true,
      profile,
    });
  } catch (error) {
    console.error("Get Profile Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};