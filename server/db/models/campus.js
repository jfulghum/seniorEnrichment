const Sequelize = require('sequelize');
const db = require("../index");
const Student = require('./Student');

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        // defaultValue: '/images/default-photo.jpg' 
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

// Campus.hook('afterCreate', function(campus){
//     Student.create({
//         firstName: 'Johanna',
//         lastName: 'Fulghum',
//         email: "johanna.fulghum@gmail.com",
//         gpa: 4,
//         campusId: campus.id
//     })
// })

module.exports = Campus;