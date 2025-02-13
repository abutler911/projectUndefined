const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = process.env.PORT || 3000;

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.static(path.join(__dirname, "public")));

// Express Layouts
app.use(expressLayouts);
app.set("layout", "layouts/main");

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

// Error handling

// Start the server
app.listen(port, () => {
  console.log(`The server is up on port ${port}!`);
});
