const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Handlebars engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static folder
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => res.render("home"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
