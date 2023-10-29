const exprees = require('express')

const app = exprees()

/** get post put  delete */

app.get('/' , (req , res)=>{
    res.send(" hello World ")
})


/** Routes Paremeter */

app.get('/courses/:id' , (req , res)=>{
    res.send(req.params.id)
})





/** Environment variable and PORT */

const port = process.env.PORT || 3000

app.listen( port , ()=>{
    console.log(` The app was Running on ${port} `)
})