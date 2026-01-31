const express = require("express");
const noteModel = require("./model/note.model");

const app = express();

app.use(express.json());

// POST method API

app.post("/api/notes",async (req, res) => {
  const { title, description } = req.body;

  const note = await noteModel.create({
    title,description
  })

  res.status(201).json({
    message:"Note Created Successfully.",
    note
  })
});

// GET method API

app.get("/api/notes",async (req, res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message:"Notes Fetched Successfully.",
        notes
    })
})

module.exports = app;
