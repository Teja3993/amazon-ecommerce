require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

// TEMP test route (keep it)
app.get("/test", (req, res) => res.send("TEST OK"));

// Routes (will be built in AMZ-39 to AMZ-64)
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/products", require("./routes/productRoutes"));

// Connect MongoDB
connectDB();

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

module.exports = app;
