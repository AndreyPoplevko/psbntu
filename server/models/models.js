const sequelize = require("../db");
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true},
    name: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    сategories: {type: DataTypes.STRING},
    score: {type: DataTypes.INTEGER},
    role: {type: DataTypes.STRING}
});

module.exports = User;