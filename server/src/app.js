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

// Allowed Origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://mdbilal-portfolio.vercel.app",
];

// CORS Configuration
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow Postman, Render health checks, etc.
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Development Logs
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Rate Limiter
app.use(rateLimiter);

// Parse JSON
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend API is Running 🚀");
});

// API Routes
app.use("/api", contactRoutes);

// Error Handler
app.use(errorHandler);

export default app;