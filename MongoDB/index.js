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
    name : {type:String , required:true},
    creator : {type:String , required:true},
    publishedDate : { type:Date , default:Date.now},
    isPubiished : {type:String , required:true},
    rating : Number
})

/** model */

const Course = mongoose.model('Course' , courseSchema)



/** find data  */

async function createCourse(){

    const course = new Course({
        name : "Java",
        
    })

    /** validate() */
    
   try{
    course.validate()
   }
   catch(error){
    console.error(error.message)
   }

}

createCourse()


async function getCourses(){

    const courses = await Course.find({creator:'Md azaz'}).select({name : 1 , publishedDate: 1 })
    console.log(courses)

}

//getCourses();


/** updateCourses */

async function updateCourses(id){

    const course = await Course.findById(id)

    if(!course) return;

    course.name = "Python"

    course.creator = "steve"

    const updatedCourses = await course.save()
    console.log(updatedCourses)

}

// updateCourses('65427410590baa34ca3a30e1');



/** Delete id  */

async function deleteCourses(id){

    const course = await Course.findByIdAndDelete(id)
    
    console.log(course)

}

// deleteCourses('65427504da599653f6aca104')