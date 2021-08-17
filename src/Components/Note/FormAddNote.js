import React, {useContext, useState} from 'react';
import './CSS/FormAddTodo.css'
import NotesContext from "../../Context/Notes";

function FormAddNote(props) {


    const [ text , setText ] = useState('');
    const noteContext = useContext(NotesContext);


    let formHandler = e => {
        e.preventDefault();
        noteContext.add(text);
        setText('');
    }
    let inputHandler = e => setText(e.target.value)


    return (
        <form className="form" onSubmit={formHandler}>
            <div className="">
                <input type="text" className="note-input" placeholder="Take a Note ..." value={text} onChange={inputHandler}/>
                <button type="submit" className="">add</button>
            </div>
        </form>
    )
}

export default FormAddNote;