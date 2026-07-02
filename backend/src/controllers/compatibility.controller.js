import Listing from "../models/Listing.js";
import TenantProfile from "../models/TenantProfile.js";
import Compatibility from "../models/Compatibility.js";
import { generateCompatibility } from "../services/gemini.service.js";

export const getCompatibilityScore = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.listingId);

        const profile = await TenantProfile.findOne({
            user: req.user._id
        });

        if (!listing) {
            return res.status(404).json({
                message: "Listing not found"
            });
        }

        const aiResult = await generateCompatibility(
            profile,
            listing
        );

        const compatibility = await Compatibility.create({
            tenant: req.user._id,
            listing: listing._id,
            score: 80,
            explanation: aiResult,
            generatedBy: "Gemini"
        });

        // Notification logic (optional)
        if (compatibility.score >= 85) {
            console.log(
                `Excellent Match: ${compatibility.score}% compatible room`
            );

            // Example:
            // await createNotification(
            //     req.user._id,
            //     "Excellent Match",
            //     `You found a ${compatibility.score}% compatible room`
            // );
        }

        res.status(200).json({
            success: true,
            compatibility
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};