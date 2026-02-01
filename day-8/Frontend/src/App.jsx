import { useState } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  axios.get("http://localhost:3000/api/notes").then((res) => {
    setNotes(res.data.notes);
  });

  return (
    <>
      <div className="notes">
        {notes.map((note, idx) => {
          return (
            <div key={idx} className="note">
              <h2>{note.title}</h2>
              <h4>{note.description}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
