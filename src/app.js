const express = require("express");
const path = require("path");
require("../src/db/conn")
const Mensranking = require("./models/mens")
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
//app.use(express.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.send("<h1>i am from Rastfull API !</h1>")
})

// now we will handle post request
app.get("/mens", async(req,res)=>{
    try {
    
       const mensData = new Mensranking(req.body);
       console.log(req.body);
     const insertedData = await mensData.save(); 
     res.status(201).send(getMens);
    } catch (err) {
        res.status(400).send("invalid post request");
    }
})


app.listen(PORT, ()=>{
    console.log(`Server is listning on port ${PORT}`);
})