const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then( () => console.log('Connection is Successful'))
.catch(err => console.error('Couldnt connect to mongodb' , err))