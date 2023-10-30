//** All  Middlewares  */

function mymiddlewares(req , res , next){
    console.log(' I am custom middleware')
    next()
}




/** Exporting the file */

module.exports = mymiddlewares