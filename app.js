const express = require('express')
const app = express()
const port = 3000

const apiHelper = require('./api-helper')

require('dotenv').config();

app.get('/', (req, res) => res.send('Home page!'))

app.get('/people', (req, res) => {
    apiHelper.makeApiCall('https://api.zenefits.com/core/people')
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.send(error)
    });
})

app.get('/testGetApi', (req, res) => {
    apiHelper.makeApiCall('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
