import React from 'react';
import Note from './Note';

const NotesList = ({ notes }) => {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note /> 
            ))}
        </div>
    )
};

export default NotesList;