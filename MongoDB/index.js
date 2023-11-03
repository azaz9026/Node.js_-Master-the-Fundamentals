const mongoose = require('mongoose')

/** connections of mongodb */ 

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then( () => console.log('Connection is Successful'))
.catch(err => console.error('Couldnt connect to mongodb' , err))



/** Schema */

const courseSchema = new mongoose.Schema({
    name : {type:String , required:true , minlength : 5 , maxlength : 200},
    category:{
        type:String,
        required: true,
        enum : ['DSA' , 'Web' , 'Mobile' , 'Data Science']
    },
    creator : {type:String , required:true},
    publishedDate : { type:Date , default:Date.now},
    isPubiished : {type:String , required:true},
    rating : {type:String , required : function(){return this.isPubiished}}
})

/** model */

const Course = mongoose.model('Course' , courseSchema)



/** find data  */

async function createCourse(){

    const course = new Course({
        name : "MongoDb",
        category : "DSA",
        creator : "Adam",
        isPubiished : true,
        rating : 4.5
    })

    /** validate() */

   try{
    course.validate()
   }
   catch(error){
    for (field in error.errors){
       console.log(error.errors[field])
    }
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