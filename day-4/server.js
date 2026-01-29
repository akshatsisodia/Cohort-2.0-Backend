const app = require("./src/app");

const notes = [];

// POST /notes Api ------>>

app.post("/notes",(req, res)=>{
    console.log(req.body)

    notes.push(req.body)

    res.send("note created successfully");
})

// GET /notes Api ------>>

app.get("/notes",(req, res)=>{
    res.send(notes);
})

// DELETE /notes/:index Api ------>>
// params ---->>

app.delete("/notes/:index",(req, res)=>{
    delete notes[req.params.index]
    res.send("note deleted successfully");
})

// PATCH /notes/:index Api ------>>
// params ---->>

app.patch("/notes/:index",(req, res)=>{
    notes[req.params.index].description = req.body.description;
    res.send("Modified Successfully");
})


app.listen(3000,()=>{
    console.log("server is runing on port 3000");
})