const exprees = require('express')

const app = exprees()

/** get post put  delete */

app.get('/' , (req , res)=>{
    res.send(" hello World ")
})

app.listen(3000 , ()=>{
    console.log(' the app was running on port:3000 ')
})