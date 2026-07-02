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

// ==================== TEMPORARY CORS CONFIG ====================
app.use(
  cors({
    origin: true,
    credentials: true,
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
app.use("/api/auth", authRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/profile", tenantProfileRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/compatibility", compatibilityRoutes);
app.use("/api/interests", interestRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/admin", adminRoutes);

// ==================== 404 HANDLER ====================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ==================== GLOBAL ERROR HANDLER ====================
app.use((err, req, res, next) => {
  console.error("Server Error:", err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;