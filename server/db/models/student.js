const Sequelize = require('sequelize');
const db = require("../index");

const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    gpa: {
        type: Sequelize.INTEGER,
        validate: { min: 0.0, max: 4.0 }
    },
    name: {
        type: Sequelize.VIRTUAL,
        get() {
            this.firstName + this.lastName
        }
    }
})


module.exports = Student;