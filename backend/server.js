import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import { conectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRoute from "./routes/cartRoute.js";
// import path from "path";

// App config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
conectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/users", userRouter);
app.use("/api/cart", cartRoute);

// Serve static frontend files
// Adjust the path to point to the frontend/dist folder correctly
// app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));

// // Catch-all route for SPA (Single Page Application) routing
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
// });

// Default root route
app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});