import React from 'react';
import {useState} from 'react';

export default function CreateArea(props) {

    const [note,setNote] = useState({
        title:'',
        content:''
    })

    
    const handleChange = (e) => {
        const {name,value} = e.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }
    const submitNote = () => {
        props.onAdd(note);
        setNote ({
            title:'',
            content:''
        });

        
    }


  return (
    <div>
        <form className="take-note">
            <input
            type="text"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder='title'
            />
            <textarea
            name="content"
            col="6"
            row="2"
            onChange={handleChange}
            value={note.content}
            placeholder='Take a note'
            />
           <button type="button" class="btn btn-dark"onClick={submitNote}>Add Me</button>
        </form>
        

    </div>
  )
}
