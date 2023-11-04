const express = require('express')
const categories = require('./Routes/categories')


const app = express()

/** Adding JSON Middleware */

app.use(express.json())
app.use(categories)


/** port number */

const port = process.env.PORT || 3000
app.listen(port , () => console.log( `the port is listening ${port}....` ))

