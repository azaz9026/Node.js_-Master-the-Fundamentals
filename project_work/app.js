const express = require('express')
const mongoose = require('mongoose')
const categories = require('./Routes/categories')


const app = express()

mongoose.connect('mongodb://127.0.0.1/learningPlatform')
.then(()=> console.log('connection is Successful'))
.catch(err=> console.error('coudlnt connect to mongodb' , err))

/** Adding JSON Middleware */

app.use(express.json())
app.use(categories)


/** port number */

const port = process.env.PORT || 3000
app.listen(port , () => console.log( `the port is listening ${port}....` ))

