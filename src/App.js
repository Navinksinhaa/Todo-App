
import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Footer from './components/Footer';


function App() {
  const [notes,setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(preNote=> {
      return [...preNote,newNote]
    })
  }
  const deleteNote = (id) => {
    setNotes(prevNote=> {
      return prevNote.filter((noteItem,index) => {
        return index!== id
      })
    })
  }

  return (
    <div className="App">
      <Header/>
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem,index) => {
        return (
          <Note
             id={index}
             key={index}
             title={noteItem.title}
             content={noteItem.content}
             onDelete={deleteNote}
           />
        )
      })
      }
      <Footer/>
    </div>
  );
}

export default App;
