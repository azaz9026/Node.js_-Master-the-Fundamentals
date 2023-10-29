const exprees = require('express')

const app = exprees()

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

/** get post put  delete */

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



/** Environment variable and PORT */

const port = process.env.PORT || 3000

app.listen( port , ()=>{
    console.log(` The app was Running on ${port} `)
})