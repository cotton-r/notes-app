import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";


import NotesList from "./components/NotesList";
import Search from "./components/Search";


const App = () => {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is sample text",
      date: "12/09/2022"
    },
    {
      id: nanoid(),
      text: "This is my 2nd sample text",
      date: "01/09/2022"
    },
    {
      id: nanoid(),
      text: "This is my 3rd sample text",
      date: "25/04/2022"
    }
  ]);

  const [searchText, setSearchText] = useState('');

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }


  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NotesList 
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}
      />
    </div>
  )
};

export default App;