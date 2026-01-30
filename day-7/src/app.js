const express = require("express");
const noteModel = require("./models/notes.model");

const app = express();

// Middleware
app.use(express.json());


// POST request for Creating a note
app.post("/notes", async (req, res)=>{
    const {title, description} = req.body;

    const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message:"Note Created Successfully.",
        note
    })
})

// GET request for Getting notes
app.get("/notes",async (req, res)=>{
    const notes = await noteModel.find();

    res.status(200).json({
        massage:"note fetched successfully.",
        notes
    })
})


module.exports = app;