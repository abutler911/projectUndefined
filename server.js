const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = process.env.PORT || 3000;

// Dummy blog post data (replace with database later)
const posts = [
  {
    id: 1,
    title: "The Joy of Coding",
    slug: "joy-of-coding",
    image: "/images/coding.jpg",
    excerpt: "Exploring the endless possibilities of programming...",
    content: "Full content of this blog post goes here.",
    category: "Coding",
    date: "February 10, 2025",
  },
  {
    id: 2,
    title: "Flying Through Life",
    slug: "flying-through-life",
    image: "/images/aviation.jpg",
    excerpt: "Lessons from aviation that apply to everyday life...",
    content: "Full content of this aviation blog post goes here.",
    category: "Aviation",
    date: "February 5, 2025",
  },
  {
    id: 3,
    title: "Lessons from Consulting",
    slug: "consulting-lessons",
    image: "/images/consulting.jpg",
    excerpt: "Insights from years of working in business consulting...",
    content: "Full content of this consulting blog post goes here.",
    category: "Life & Consulting",
    date: "January 28, 2025",
  },
];

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
  res.render("pages/index", { title: "Home", posts });
});

// Blog routes (List all blog posts)
app.get("/blog", (req, res) => {
  res.render("blog/blog", { posts });
});

// Single blog post route
app.get("/blog/:slug", (req, res) => {
  const post = posts.find((p) => p.slug === req.params.slug);
  if (!post) return res.status(404).send("Post not found.");

  res.render("blog/blogPost", { post });
});
// Error handling

// Start the server
app.listen(port, () => {
  console.log(`The server is up on port ${port}!`);
});
