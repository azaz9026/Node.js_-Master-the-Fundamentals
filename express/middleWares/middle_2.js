//** Second  Middlewares  */

function my_2_middlewares(req , res , next){
    console.log('I am custom second middleware')
    next()
}


/** Exporting the file */

module.exports = my_2_middlewares