// const express=require("express");
// const mongoose=require("mongoose");
// const app=express();
// app.get("/",(req,res) =>{   
//     res.send("server started");
// });
// app.listen(7000,async()=>
//     {
//     console.log("server is working");

//     await mongoose.connect("mongodb+srv://db_user:triveni19@cluster.xsouczt.mongodb.net/triveni");
//     console.log(mongoose.connection.name);
// });

const express=require("express");
const mongoose=require("mongoose");
const app=express();
app.get("/",(req,res)=>{
    res.send("server started");
});
app.listen(7000,async()=>{
    console.log("server is working");

    await mongoose.connect("mongodb+srv://db_user:triveni19@cluster.xsouczt.mongodb.net/triveni");
    console.log(mongoose.connection.name);
})