/**const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then( () => console.log('Connection is Successful'))
.catch(err => console.error('Couldnt connect to mongodb' , err))*/

/** connections of mongodb */


const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')

.then( ()=> console.log(' Connection is Successful '))
.catch( err=> console.error(' Couldnt connect to mongodb' , err ))


/** Schema */

const courseSchema = new mongoose.Schema({
    name : String,
    creator : String,
    publishedDate : { type:Date , default:Date.now},
    isPubiished : Boolean
})

/** model */

const Course = mongoose.model('Course' , courseSchema)



async function createCourse(){

    const course = new Course({
        name : "Java",
        creator : "Lux",
        isPubiished : false
    })

    const result  = await course.save()
    console.log(result)

}


async function getCourses(){

    const courses = await Course.find({creator:'Md azaz'}).select({name : 1 , publishedDate: 1 })
    console.log(courses)

}

getCourses();