//create mini express app
const exp=require("express");
const adminExpressApp=exp.Router();

//write admin req. handler here
adminExpressApp.get('/test',()=>{
    console.log("");
})

//export admin user req.handler here
module.exports=adminExpressApp;