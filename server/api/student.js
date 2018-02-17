const router = require('express').Router();

const HttpError = require('../utils/HttpError');
const { Student, Campus } = require('../db/models')


router.get('/', (req, res, next) => {
    Student.findAll({
        // include: [Campus]
    })
    .then(students => res.json(students))
    .then(students => console.log("students", students))
    .catch(next)
})

router.post('/', (req, res, next) => {
    Student.create(req.body)
    .then(student => res.status(201).json(student))
    .catch(next);
})

router.get('/:id', (req, res, next) => {
    Student.findById(req.params.id, {
        include: [Campus]
    })
    .then(student => res.json(student))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
   req.student.update(req.body)
    .then(student => res.json(student))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
    req.student.destroy()
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router;