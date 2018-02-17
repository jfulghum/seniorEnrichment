const Promise = require('bluebird');
// const Student = require('./server/db/models/student');
// const Campus = require('./server/db/models/campus');
const { db, Student, Campus } = require('./server/db/models');

const campuses = [{

  name: "Virginia Tech",
  description: "Hokie Land!",
  imageUrl: '/images/default-photo.jpg' 
}, {

  name: "Hogwarts",
  description: "Witchcraft!",
  imageUrl: '/images/default-photo.jpg' 
}
]


const id = () => Math.round(Math.random() * (campuses.length - 1)) + 1;

const students = [{
    firstName: 'Antigone',
    lastName: 'Fulghum',
    email: "antigone@gmail.com",
    gpa: 4,
    image: '/images/antigone.jpg',
    // campusId: 1
  }, {
    firstName: 'Aeris',
    lastName: 'Fulghum',
    email: "aeris@gmail.com",
    gpa: 4,
    image: '/images/aeris.jpg',
    // campusId: 1
  }, {
    firstName: 'Angie',
    lastName: 'Fulghum',
    email: "angie@gmail.com",
    gpa: 4,
    image: '/images/angie.jpg',
    // campusId: 1
  }, {
    firstName: 'Cloud',
    lastName: 'Fulghum',
    email: "cloud@gmail.com",
    gpa: 4,
    image: '/images/cloud.jpg',
    // campusId: 1
  }];

  const seed = () =>
  Promise.all(students.map(student =>
    Student.create(student))
  )
  .then(() =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
);

const main = () => {
    console.log('Syncing db...');
    db.sync({ force: true })
      .then(() => {
        console.log('Seeding the database...');
        return seed();
      })
      .catch(err => {
        console.log('Error while seeding the database');
        console.log(err.stack);
      })
      .then(() => {
        db.close();
        return null;
      });
  };
  
  main();

// db.sync({force: true})
//   .then(() => {
//      return Promise.map(campuses, campus => {
//       return Campus.create(campus, {
//         include: [Student]
//       })
//      })
//   })
//   .then(() => {
//     console.log('seeded successfully');
//   })
//   .catch(console.error)
