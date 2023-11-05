const express = require('express')
const {Category , validate} = require('../models/categoriesModel')
const router = express.Router()



/** Get Method */


router.get('/', async (req , res) => {
    let categories = await Category.find()
    res.send(categories)
})



/** Post Method */


router.post('/' , async (req , res) => {

const {error} = validate(req.body)
if(error) res.status(400).send(error.details[0].message)

 const category = new Category({
    name : req.body.name
})
await category.save()
res.send(category)

})


/** Put Method */


router.put('/:id' , async (req , res) => {

    const {error} = validate(req.body)
    if(error) res.status(400).send(error.details[0].message)

    const category = await Category.findByIdAndUpdate(req.params.id , {name : req.body.name} , {new : true})

    if(!category) return res.status(404).send(' The Category with the given ID was not found. ')

    res.send(category)

})


/** Delete Method */


router.delete('/:id' , async (req , res) => {

    const category = await Category.findByIdAndDelete(req.params.id)

    if(!category) return res.status(404).send(' The Category with the given ID was not found. ')

    res.send(category)

})


/** Get Method find by ID */


router.get('/:id' , async (req , res) => {

    const category = await Category.findById(req.params.id)

    if(!category) return res.status(404).send(' The Category with the given ID was not found. ')

    res.send(category)

})



module.exports = router
