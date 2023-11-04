const express = require('express')


const app = express()

/** Adding JSON Middleware */

app.use(express.json())

const categories = [
    {id:1 , name : 'Web'},
    {id:1 , name : 'Mobile'},
    {id:1 , name : 'Photography'},
]


/** Get Method */


app.get('/api/categories', (req , res) => {
    res.send(categories)
})



/** Post Method */


app.post('/api/categories' , (req , res) => {
 const category = {
        id: categories.length + 1,
        name : req.body.name
  };
    categories.push(category)
    res.send(category)

})


/** Put Method */


app.put('/api/categories/:id' , (req , res) => {

    const category = categories.find(c => c.id === parseInt(req.params.id));
    if(!category) return res.status(404).send(' The Category with the given ID was not found. ')


    category.name = req.body.name
    res.send(category)

})


/** Delete Method */


app.delete('/api/categories/:id' , (req , res) => {

    const category = categories.find(c => c.id === parseInt(req.params.id));
    if(!category) return res.status(404).send(' The genre with the given ID was not found. ')


    const index = categories.indexOf(category);
    categories.splice(index , 1)
    res.send(category)

})


/** Get Method with ID */


app.get('/api/categories/:id' , (req , res) => {

    const category = categories.find(c => c.id === parseInt(req.params.id));
    if(!category) return res.status(404).send(' The genre with the given ID was not found. ')

    res.send(category)

})


/** port number */

const port = process.env.PORT || 3000
app.listen(port , () => console.log( `the port is listening ${port}....` ))