import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import adminRoutes from "./routes/admin.routes.js";
import authRoutes from "./routes/auth.routes.js";
import listingRoutes from "./routes/listing.routes.js";
import tenantProfileRoutes from "./routes/tenantProfile.routes.js";
import chatRoutes from "./routes/chat.routes.js";
import compatibilityRoutes from "./routes/compatibility.routes.js";
import interestRoutes from "./routes/interest.routes.js";
import notificationRoutes from "./routes/notification.routes.js";

const app = express();

// ==================== CORS CONFIG ====================
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Local frontend
      process.env.CLIENT_URL, // Vercel frontend
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ==================== MIDDLEWARES ====================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ==================== HEALTH CHECK ====================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "RoomMate Finder API Running 🚀",
  });
});

// ==================== ROUTES ====================

// Authentication Routes
app.use("/api/auth", authRoutes);

// Listings Routes
app.use("/api/listings", listingRoutes);

// Tenant Profile Routes
app.use("/api/profile", tenantProfileRoutes);

// Chat Routes
app.use("/api/chat", chatRoutes);

// Compatibility Routes
app.use("/api/compatibility", compatibilityRoutes);

// Interest Routes
app.use("/api/interests", interestRoutes);

// Notification Routes
app.use("/api/notifications", notificationRoutes);

// Admin Routes
app.use("/api/admin", adminRoutes);

// ==================== 404 HANDLER ====================
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;