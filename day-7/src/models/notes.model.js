const mongoose = require("mongoose");

// Schema - Creating a structure for data in DB -->
// Model - Perform any action in DB - CRUD -->

const noteSchema = new mongoose.Schema({
    title:String,
    description:String,
})

const noteModel = mongoose.model("notes",noteSchema)

module.exports = noteModel;