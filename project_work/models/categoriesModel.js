const mongoose = require('mongoose')
const joi = require('joi')


/** Schema */

const categorySchema = new mongoose.Schema({
    name : {type : String , required : true , minlength : 3 , maxlength : 30},
    
})

/** model */

const Category =  mongoose.model('category' , categorySchema)




/**  validateData a not */


function validateData(category){
    const schema = {
        name : joi.string().min(3).required()
    }
    return joi.validate(category , schema)
}