const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class BlogPost extends Model {}

BlogPost.init(
	{
		// ID field
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		// Title field
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		// Content field
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		// Author field
		author: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		// Post date field
		post_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		// Category field
		category: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false, // Disable Sequelize auto timestamps (createdAt, updatedAt)
		freezeTableName: true, // Prevent Sequelize from pluralizing the table name
		underscored: true, // Use underscores instead of camelCasing
		modelName: "blog_post", // Define the model name
	}
);

module.exports = BlogPost;
