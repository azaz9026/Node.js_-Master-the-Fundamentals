const express = require('express')


const app = express()

const categories = [
    {id:1 , name: 'Web'},
    {id:1 , name: 'Mobile'},
    {id:1 , name: 'Photography'}
]

/** Get Method */

app.get('/api/categories', (req , res) => {
    res.send(categories)
})

app.post('/api/categories' , (req , res) => {

})