const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let users = []; // simple in-memory store

// Registration API
app.post("/api/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  // Check if user exists
  const exists = users.find((u) => u.email === email);
  if (exists) {
    return res.status(409).json({ message: "User already exists" });
  }

  // Store user
  users.push({ email, password });

  res.json({ message: "Registered successfully", user: { email } });
});

if (require.main === module) {
  app.listen(4000, () => {
    console.log("Backend running on http://localhost:4000");
  });
}

module.exports = app;

