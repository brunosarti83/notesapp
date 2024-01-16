require("dotenv").config();
const { Sequelize } = require("sequelize");
// models
const NotesModel = require("./models/Note");
const CategoriesModel = require("./models/Category");
const UsersModel = require("./models/User");


const sequelize = new Sequelize(process.env.DB_URI, {
    logging: false, 
    native: false, 
});

const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

// inject models
NotesModel(sequelize);
CategoriesModel(sequelize);
UsersModel(sequelize);

// extract injected models
const { Note, Category, User } = sequelize.models;

// set relationships
Note.belongsToMany(Category, {through: 'note_category'})
Category.belongsToMany(Note, {through: 'note_category'})

Note.belongsTo(User)
User.hasMany(Note)

Category.belongsTo(User)
User.hasMany(Category)

module.exports = { connection:sequelize, testDbConnection, ...sequelize.models };