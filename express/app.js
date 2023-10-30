const express = require('express')

/** importing the middlewares */

const mymiddlewares = require('./middleWares/middle')
const my_2_middlewares = require('./middleWares/middle_2')

const app = express()

const courses = [
    {
        id : 1 ,
        name : 'Python'
    },
    {
        id : 2 ,
        name : 'Java'
    },
    {
        id : 3 ,
        name : 'Java Script'
    },
    {
        id : 4 ,
        name : 'C Lang'
    }

]

/** Adding Middleware */

app.use(express.json())

app.use(mymiddlewares)

app.use(my_2_middlewares)

/** get , post , put and  delete */

app.get('/' , (req , res)=>{
    res.send(" hello World ")
})


/** Routes Paremeter */

/** 
    app.get('/courses/:id' , (req , res)=>{
    res.send(req.params.id)
    })  
*/ 

/** Handling Multiple Routes Paremeter */

app.get('/courses/:coursename' , (req , res)=>{
    let course = courses.find(course => course.name === req.params.coursename)

    if (!course) res.status(404).send(' the Courses that you find it not in thier ')
    res.send(course)  
})


/** HTTP Get Method */

app.get('/courses' , (req , res)=>{
    res.send(courses)
})


/** HTTP Post Method */

app.post('/courses' , (req , res)=>{
    const course = {
        id : courses.length + 1,
        name : req.body.name
    }

    courses.push(course)
    res.send(course)
})


/** Environment variable and PORT */

const port = process.env.PORT || 3000

app.listen( port , ()=>{
    console.log(` The app was Running on ${port} `)
})