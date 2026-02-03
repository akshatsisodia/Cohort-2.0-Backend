import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [updateDesc, setUpdateDesc] = useState("");

  function createNote(e){
    e.preventDefault();
    const {title, description} = e.target.elements;
    axios.post("/api/notes",{
      title:title.value,
      description:description.value,
    }).then((res)=>{
      fetchNotes();
    })
    
  }

  function fetchNotes() {
    axios.get("/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }

  function deleteNote(id){
    axios.delete(`/api/notes/${id}`).then((res)=>{
      fetchNotes();
    })
  }

  function updateNote(id){
    axios.patch(`/api/notes/${id}`,{
      description:updateDesc,
    }).then((res)=>{
      fetchNotes();
    })

    setUpdateDesc("");

  }
  

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
    <form onSubmit={(e)=>{
      createNote(e);
    }}>
      <input name="title" type="text" placeholder="Enter Title"/>
      <input name="description" type="text" placeholder="Enter Description"/>
      <button>Create Note</button>
    </form>
    <div className="input-container">
      <input
      type="text"
      placeholder="Enter updated description"
      value={updateDesc}
      onChange={(e) => {
        setUpdateDesc(e.target.value);
      }}
      />
    </div>
    <div className="notes">
        {notes.map((note, idx) => {
          return (
            <div key={idx} className="note">
              <h2>{note.title}</h2>
              <h4>{note.description}</h4>
              <button onClick={()=>{
                deleteNote(note._id);
              }}>Delete</button>
              <button onClick={(e)=>{
                updateNote(note._id);
              }}>Update</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
