import React, {useContext, useState} from 'react';
import './CSS/FormAddTodo.css'
import NotesContext from "../../Context/Notes";
import axios from "axios";

function FormAddNote(props) {


    const [ text , setText ] = useState('');
    const noteContext = useContext(NotesContext);


    let formHandler = e => {
        e.preventDefault();
        //ajax
        let note = { text: text };
        axios.post(`https://note-taking-c97bb-default-rtdb.europe-west1.firebasedatabase.app/notes.json` , note )
            .then( response => noteContext.add(text) )
            .catch( err => console.log(err))
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