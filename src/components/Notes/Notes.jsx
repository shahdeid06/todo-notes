import { useContext, useState } from "react";
import { AppContext } from "../../Context";
import "./notes.css";

function Notes() {

  const { notes, setNotes } = useContext(AppContext);

  const [input, setInput] = useState("");

  function addNote() {

    if(input.trim() === "") return;

    const newNote = {
      id: Date.now(),
      text: input
    };

    setNotes([...notes, newNote]);

    setInput("");
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div className="notes">

      <h2>Notes App</h2>

      <div className="note-input">

        <input
          type="text"
          placeholder="Write a note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={addNote}>
          Add
        </button>

      </div>

      <div className="notes-list">

        {notes.map((note) => (
          <div className="note-card" key={note.id}>

            <p>{note.text}</p>

            <button onClick={() => deleteNote(note.id)}>
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Notes;