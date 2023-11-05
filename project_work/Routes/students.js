const express = require('express')

const mongoose = require('mongoose')

const joi = require('joi')
const boolean = require('joi/lib/types/boolean')

const router = express.Router()

/** Schema */

const studentsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 30
    },

    enrolled : {
        type : boolean, 
        default : false,
    },

    Phone : {
        type : String,
        required : true,
        minlength : 10,
        maxlength : 25
    },
})

/** model */

const Student =  mongoose.model('Student' , studentsSchema)


/** Get Method */


router.get('/', async (req , res) => {
    let students = await Student.find()
    res.send(students)
})



/** Post Method */


router.post('/' , async (req , res) => {

const {error} = validateData(req.body)
if(error) res.status(400).send(error.details[0].message)

 const student= new Student({
    name : req.body.name,
    isEnrolled : req.params.isEnrolled,
    Phone : req.body.Phone
})
await student.save()
res.send(student)

})


/** Put Method */


router.put('/:id' , async (req , res) => {

    const {error} = validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)

    const student = await Student.findByIdAndUpdate(req.params.id , {name : req.body.name , Phone : req.params.Phone , isEnrolled : req.body.isEnrolled} , {new : true})

    if(!student) return res.status(404).send(' The Student with the given ID was not found. ')

    res.send(student)

})


/** Delete Method */


router.delete('/:id' , async (req , res) => {

    const student = await Student.findByIdAndDelete(req.params.id)

    if(!student) return res.status(404).send(' The Student with the given ID was not found. ')

    res.send(student)

})


/** Get Method find by ID */


router.get('/:id' , async (req , res) => {

    const student = await Student.findById(req.params.id)

    if(!student) return res.status(404).send(' The Student with the given ID was not found. ')

    res.send(student)

})

/**  validateData a not */


function validateData(student){
    const schema = {
        name : joi.string().min(3).max(50).required(),
        Phone : joi.string().min(10).max(50).required(),
        isEnrolled : joi.boolean()
    }
    return joi.validate(student , schema)
}

module.exports = router
