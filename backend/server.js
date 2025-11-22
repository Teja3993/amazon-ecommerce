const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let users = []; // simple in-memory store
let orders = [];
app.post("/api/orders", (req, res) => {
  const { name, address, phone, payment, items, total } = req.body;

  if (!name || !address || !phone || !payment || !items || !total) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const orderId = "ORD-" + Date.now();

  const order = {
    orderId,
    name,
    address,
    phone,
    payment,
    items,
    total,
    date: new Date()
  };

  orders.push(order);

  res.json({
    message: "Order placed successfully",
    orderId,
    order,
  });
});

// Registration API
app.post("/api/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const exists = users.find((u) => u.email === email);
  if (exists) {
    return res.status(409).json({ message: "User already exists" });
  }

  users.push({ email, password });

  res.json({ message: "Registered successfully", user: { email } });
});

// Login API
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Missing fields" });

  const user = users.find((u) => u.email === email);

  if (!user)
    return res.status(404).json({ message: "User not found" });

  if (user.password !== password)
    return res.status(401).json({ message: "Incorrect password" });

  res.json({ message: "Login successful", user: { email } });
});

// Test route
app.get("/test", (req, res) => res.send("TEST OK"));

if (require.main === module) {
  app.listen(4000, () => {
    console.log("Backend running on http://localhost:4000");
  });
}

module.exports = app;
