const express=require("express");
const notes = require("./data/notes");
const colors=require("colors")
const dotenv=require("dotenv")


const app=express();
dotenv.config()
app.get("/",(req,res)=>{
    res.send("homepage")
})
app.get("/api/notes",(req,res)=>{
    res.json(notes)
})
app.get("/api/notes/:id",(req,res)=>{
    // res.json(notes)
    const note=notes.find((n)=>n._id===req.params.id);
    res.send(note)
})
const PORT=process.env.PORT || 5000;
app.listen(PORT,console.log(`server started on PORT ${PORT}`.bgMagenta))