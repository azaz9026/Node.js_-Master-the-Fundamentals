const exprees = require('express')

const app = exprees()

/** get post put  delete */

app.get('/' , (req , res)=>{
    res.send(" hello World ")
})

/** Environment variable and PORT */

const port = process.env.PORT || 3000

app.listen( port , ()=>{
    console.log(` The app was Running on ${port} `)
})