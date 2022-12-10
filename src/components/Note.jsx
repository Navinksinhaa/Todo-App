
import { AiFillDelete } from "react-icons/ai";
import React from 'react';

export default function Note(props) {

    const handleClick = () => {
        props.onDelete(props.id)
    }
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
        <AiFillDelete/>
        </button>
        
    </div>
  )
}
