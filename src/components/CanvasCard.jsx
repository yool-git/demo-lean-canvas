import { FaPlus } from 'react-icons/fa';
import Note from './Note';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function CanvasCard({ title, notes = [], isSubTitle, onNotesChange }) {
  const handleAddNote = () => {
    const newNote = {
      id: uuidv4,
      content: '',
      color: '',
    };
    onNotesChange([...notes, newNote]);
  };

  const hadleDelNote = id => {
    onNotesChange(notes.filter(item => item.id !== id));
  };

  const handleUpdateNote = (id, content, color) => {
    onNotesChange(
      notes.map(note => (note.id === id ? { ...note, content, color } : note)),
    );
  };

  return (
    <>
      <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
        <div
          className={`${!isSubTitle && 'bg-gray-100 border-b border-b-gray-300 '}flex items-start justify-between px-3 py-2`}
        >
          {/* <h3 className={!isSubTitle ? 'font-bold' : ''}>{title}</h3> */}
          <h3 className="font-bold">{title}</h3>
          <button
            className="bg-blue-400  content-white p-1.5 content-xs rounded-md"
            onClick={handleAddNote}
          >
            <FaPlus />
          </button>
        </div>
        <div className="space-y-3 min-h-32 p-3">
          {notes.map(note => (
            <Note
              key={note.id}
              id={note.id}
              content={note.content}
              color={note.color}
              hadleDelNote={hadleDelNote}
              //handleDataModify={handleDataModify}
              onUpdateNote={handleUpdateNote}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CanvasCard;
