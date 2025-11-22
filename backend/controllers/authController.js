let users = []; // temporary in-memory store

exports.register = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Missing fields" });

  const exists = users.find((u) => u.email === email);
  if (exists)
    return res.status(409).json({ message: "User already exists" });

  users.push({ email, password });

  res.json({ message: "Registered successfully", user: { email } });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Missing fields" });

  const user = users.find((u) => u.email === email);
  if (!user)
    return res.status(404).json({ message: "User not found" });

  if (user.password !== password)
    return res.status(401).json({ message: "Incorrect password" });

  res.json({ message: "Login successful", user: { email } });
};
