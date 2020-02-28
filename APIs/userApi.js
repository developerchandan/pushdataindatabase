// create mini express app
const exp=require("express");
const userExpressApp=exp.Router();

//body parsing
userExpressApp.use(exp.json());

//import monodb
const mc=require("mongodb").MongoClient;
// connect to the db server
var dbo;
const dbUrl="mongodb://admin:admin@cluster0-shard-00-00-izra5.mongodb.net:27017,cluster0-shard-00-01-izra5.mongodb.net:27017,cluster0-shard-00-02-izra5.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
 mc.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err,clientObj)=>{
    if(err)
    {
        console.log("err is conn",err);
    }
    else
    {
    //connect to database
    dbo=clientObj.db("empdb");
    console.log("connected to db");
    }

//********************************************************************/
//post req.
userExpressApp.post('/register',(req,res)=>{
    // console.log("data is ",req.body);
    // res.send({message:'registered successful'})

// //insert obj of req.body into empcollection
dbo.collection("empcollecion").insertOne(req.body,(err,result)=>{
    if(err){
        console.log("err is insert",err);
    }
    else{
        res.send({message:"emp created successfully"})
    }
})

    

})


 })


 //****************************************************************************/


//POST request handlr one
userExpressApp.post('/register',(req, res)=>{
    console.log("data is ",req.body);
    //check for emp obj with received eno.
    dbo.collection("empcollecion").findOne({name:req.body.name},(err,empObj)=>{
        if(err)
        {
            console.log("err in find",err);
        }
        //if emp not existed
        else if(empObj==null)
        {
            //insert req.body
            dbo.collection("empcollecion").insertOne(req.body,(err,result)=>{
                if(err)
                {
                    console.log("err in insert",err);
                }
                else{
                    res.send({message:"emp created successifully"});
                }
            })
        }
        //if else already exist
        else{
            res.send({message:"already exist data"});
        }
    })
})



//**************************************************************/
// GET all req  handler request
userExpressApp.get('/readAll',(req, res)=>{

    // read data from db and convert into array
    dbo.collection("empcollecion").find().toArray((err,empArray)=>{
        if(err)
        {
            console.log("err in read",err);
        }
        //check length of empArray
        else if(empArray.length==0){
            res.send({message:"no employee found"});
        }
        else{
            res.send({message:empArray});
        }
    })
    
    });

//*******************************************************************/

// GETOne emp data operation in get handeler req.
userExpressApp.get('/readOne/:name',(req,res)=>{
    //get url parameters from req obj
    console.log(+req.params.name);
    //convert string into number
    let emp1=(req.params.name);
    //read one emp obj.
    dbo.collection("empcollecion").findOne({name:emp1},(err,empObj)=>{
        console.log(empObj)
        console.log(emp1)
        if(err)
        {
            console.log("err in read on emp ",err);
        }
        //if else not existed ,them embObj is null
        else if(empObj==null){
            res.send({message:"emp does not exist"})
        }
        else{
            res.send({message:empObj})
        }
    })
});
















//  delete req handler

userExpressApp.delete('/remove/:name',(req, res)=>{

    console.log(req.params);
    //convert string into "eno" to number
    // let empno=(+req.params.eno);
   let name1=(req.params.name);
   console.log('this is the empno',name1)
    //delete using empno
    dbo.collection("empcollecion").deleteOne({name:req.params.name},(err,result)=>{
        if(err)
        {
            console.log("err in delete",err);
        }
        else{
            res.send({message:"emp remove"});
        }
    })
})

//*************************************************************************************************************** */

































//export this userExpressApp
module.exports=userExpressApp;