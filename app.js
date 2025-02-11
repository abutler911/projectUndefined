const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// Error handling

// Start the server
app.listen(port, () => {
  console.log(`The server is up on port ${port}!`);
});
