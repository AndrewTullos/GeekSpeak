const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const helpers = require("./utils/helpers");
const routes = require("./controllers"); // Main route file
const userRoutes = require("./controllers/api/userRoutes");
const authRoutes = require("./controllers/authRoutes");
const postRoutes = require("./controllers/api/postRoutes");
const authController = require("./controllers/authController");

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Configure session middleware
const sess = {
	secret: process.env.SESSION_SECRET || "Super secret secret", // Use an environment variable for the secret
	cookie: {
		maxAge: 300000,
		httpOnly: true,
		secure: false,
		sameSite: "strict",
	},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
};

app.use(session(sess));

// Set up middleware
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Define routes
app.use(routes);
app.use("/api/users", userRoutes);
app.use(authRoutes);
app.use("/", postRoutes);
app.get("/logout", authController.logout);

// Error handling middleware

// app.use((err, req, res, next) => {
//     // Error handling logic here
// });

// Start the server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () =>
		console.log(`Server running on http://localhost:${PORT}`)
	);
});
