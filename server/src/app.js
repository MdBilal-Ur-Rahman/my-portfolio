import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import rateLimiter from "./middleware/rateLimit.js";
import contactRoutes from "./routes/contact.routes.js";
import errorHandler from "./middleware/errorMiddleware.js";

const app = express();

// Security headers
app.use(helmet());

// CORS configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// HTTP request logging (Development only)
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Rate Limiting
app.use(rateLimiter);

// Parse JSON body
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Portfolio Backend API is Running 🚀");
});

// API routes
app.use("/api", contactRoutes);

// Global error handler (Always Last)
app.use(errorHandler);

export default app;