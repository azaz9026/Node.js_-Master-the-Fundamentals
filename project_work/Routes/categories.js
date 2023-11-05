const express = require('express')

const mongoose = require('mongoose')

const joi = require('joi')

const router = express.Router()

/** Schema */

const categorySchema = new mongoose.Schema({
    name : {type : String , required : true , minlength : 3 , maxlength : 30},
    
})

/** model */

const Category =  mongoose.model('category' , categorySchema)


/** Get Method */


router.get('/api/categories', async (req , res) => {
    let categories = await Category.find()
    res.send(categories)
})



/** Post Method */


router.post('/api/categories' , async (req , res) => {

const {error} = validateData(req.body)
if(error) res.status(400).send(error.details[0].message)

 const category = new Category({
    name : req.body.name
})
await category.save()
res.send(category)

})


/** Put Method */


router.put('/api/categories/:id' , async (req , res) => {

    const {error} = validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)

    const category = await Category.findByIdAndUpdate(req.params.id , {name : req.body.name} , {new : true})

    if(!category) return res.status(404).send(' The Category with the given ID was not found. ')

    res.send(category)

})


/** Delete Method */


router.delete('/api/categories/:id' , async (req , res) => {

    const category = await Category.findByIdAndRemove(req.params.id)
    
    if(!category) return res.status(404).send(' The  Category with the given ID was not found. ')

    res.send(category)

})


/** Get Method with ID */


router.get('/api/categories/:id' , (req , res) => {

    const category = categories.find(c => c.id === parseInt(req.params.id));
    if(!category) return res.status(404).send(' The  Category with the given ID was not found. ')

    res.send(category)

})

/**  validateData a not */


function validateData(category){
    const schema = {
        name : joi.string().min(3).required()
    }
    return joi.validate(category , schema)
}

module.exports = router
