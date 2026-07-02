import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import adminRoutes
from "./routes/admin.routes.js";
import authRoutes from "./routes/auth.routes.js";
import listingRoutes from "./routes/listing.routes.js";
import tenantProfileRoutes from "./routes/tenantProfile.routes.js";
import chatRoutes
from "./routes/chat.routes.js";
import compatibilityRoutes from "./routes/compatibility.routes.js";
const app = express();
import interestRoutes from "./routes/interest.routes.js";
import notificationRoutes from "./routes/notification.routes.js";
// Middlewares
app.use(cors());
app.use(
"/api/notifications",
notificationRoutes
);
app.use(express.json());
app.use(
"/api/chat",
chatRoutes
);
app.use(express.urlencoded({ extended: true }));
app.use(
"/api/interests",
interestRoutes
);
app.use(cookieParser());
app.use(
"/api/profile",
tenantProfileRoutes
);

app.use(
"/api/compatibility",
compatibilityRoutes
);
app.use(
"/api/admin",
adminRoutes
);
// Health Check Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "RoomMate Finder API Running"
    });
});

// Routes
app.use("/api/auth", authRoutes);

app.use("/api/listings", listingRoutes);

export default app;