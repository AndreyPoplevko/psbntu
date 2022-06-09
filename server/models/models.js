const sequelize = require("../db");
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true},
    name: {type: DataTypes.STRING},
    сategories: {type: DataTypes.STRING},
    score: {type: DataTypes.INTEGER},
    position: {type: DataTypes.INTEGER}
});

module.exports = User;