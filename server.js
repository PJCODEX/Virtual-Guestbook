const express = require("express");
const path = require("path");
const app = express();

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const guests = []; // In-memory guest list

// Home route
app.get("/", (req, res) => {
  res.render("index", { guests });
});

// Form submit route
app.post("/submit", (req, res) => {
  const { name, message } = req.body;
  if (name && message) {
    guests.push({ name, message });
  }
  res.redirect("/");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
