const express= require("express");
const database= require("./connect");
let sampleRoutes= express.Router();
// Retrive all
//localhost:3000/sample
sampleRoutes.route("/sample").get(async (request,response) =>{
    let db=database.getdb();
    let data=await db.collection("sample").find({}).toArray()

    if (data.lenght>0){
        response.json(data);
    }
    else{
        throw new Error("No Data");
    }
});
module.exports = sampleRoutes;
