import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/orders.js";

// Load environment variables
dotenv.config();

const mongoURI = process.env.MONGODB_URI;  // Ensure this is set correctly in .env

const app = express();

// Middleware
app.use(cors());  // Enable Cross-Origin Requests
app.use(express.json());  // Parse JSON request bodies

// Routes
app.use("/api/auth", authRoutes);  // Authentication routes
app.use("/api/orders", orderRoutes);  // Order management routes

// Connect to MongoDB
mongoose.connect(mongoURI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

//ended this in 4th sem
