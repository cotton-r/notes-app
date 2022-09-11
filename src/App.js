import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";


import NotesList from "./components/NotesList";


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


  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  )
};

export default App;