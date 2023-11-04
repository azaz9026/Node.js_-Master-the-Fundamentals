const express = require('express')
const Joi = require('joi')

const joi = require('joi')

const router = express.Router()

const categories = [
    {id:1 , name : 'Web'},
    {id:2 , name : 'Mobile'},
    {id:3 , name : 'Photography'},
]


/** Get Method */


router.get('/api/categories', (req , res) => {
    res.send(categories)
})



/** Post Method */


router.post('/api/categories' , (req , res) => {
 const category = {
        id: categories.length + 1,
        name : req.body.name
  };
    categories.push(category)
    res.send(category)

})


/** Put Method */


router.put('/api/categories/:id' , (req , res) => {

    const category = categories.find(c => c.id === parseInt(req.params.id));
    if(!category) return res.status(404).send(' The Category with the given ID was not found. ')


    category.name = req.body.name
    res.send(category)

})


/** Delete Method */


router.delete('/api/categories/:id' , (req , res) => {

    const category = categories.find(c => c.id === parseInt(req.params.id));
    if(!category) return res.status(404).send(' The genre with the given ID was not found. ')


    const index = categories.indexOf(category);
    categories.splice(index , 1)
    res.send(category)

})


/** Get Method with ID */


router.get('/api/categories/:id' , (req , res) => {

    const category = categories.find(c => c.id === parseInt(req.params.id));
    if(!category) return res.status(404).send(' The genre with the given ID was not found. ')

    res.send(category)

})

/**  validateData a not */
function validateData(category){
    const schema = {
        name : Jio.string.min().required()
    }
    return Joi.validate(category , schema)
}

module.exports = router
