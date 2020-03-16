const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

const apiHelper = require('./api-helper')

require('dotenv').config();

const port = process.env.PORT

app.get('/', (req, res) => res.send('Home page!'))

app.get('/people', (req, res) => {
    apiHelper.makeApiCall('https://api.zenefits.com/core/people', req.query.starting_after)
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.send(error)
    });
})

app.get('/departments', (req, res) => {
    apiHelper.makeApiCall('https://api.zenefits.com/core/departments', req.query.starting_after)
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.send(error)
    });
})

app.get('/companies', (req, res) => {
    apiHelper.makeApiCall('https://api.zenefits.com/core/companies', req.query.starting_after)
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
