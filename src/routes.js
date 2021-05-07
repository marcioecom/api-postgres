const express = require('express')
const routes = express.Router()

const db = require('./database/queries')

routes.get('/', (req, res) => {
    res.json({ info: 'Esta funcionando!' })
})

routes.get('/users', db.getUsers)

routes.post('/users', db.createUser)

routes.get('/users/:id', db.getUserById)

routes.put('/users/:id', db.updateUser)

routes.delete('/users/:id', db.deleteUser)

module.exports = routes