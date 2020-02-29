//import express module
const exp =require("express");
const app=exp();

//import path module
const path=require("path");

 

//connect with angular appto dist folder
app.use(exp.static(path.join(__dirname,'./dist/angularApp')));
//import usear  and admin app

const usearApp=require("./APIs/userApi");
const adminApp=require("./APIs/adminApi");

//forwared to specific api based on path
app.use("/user",usearApp);
app.use("/admin",adminApp);



//assign port number
const port =3000;
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});

