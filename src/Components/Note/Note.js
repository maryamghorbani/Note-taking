import React, { useState , useContext } from 'react';
import './CSS/Note.css';
import EditNote from "./EditNote";
import NotesContext from "../../Context/Notes";
import axios from "axios";


function Note(props) {


    const {item} = props;
    const [edit , setEdit] = useState(false);
    const noteContext = useContext(NotesContext);

    let editHandler = text => {
        noteContext.dispatch({ type : 'edit_note' , payload : { key : item.key , text }})
        setEdit(false);
    }
    let deleteHandler = e => {
        // ajax
        axios.delete(`https://note-taking-c97bb-default-rtdb.europe-west1.firebasedatabase.app/notes/${item.key}.json`)
            .then( response => {
                noteContext.dispatch({ type : 'delete_note' , payload : { key : item.key}})
            })
            .catch( err => console.log(err) )
    }

    return (
        <>
            {
                ! edit
                    ? (
                        <div className="Note">
                            <div>
                                {item.text}
                            </div>
                            <div>
                                <button type="button" className="" onClick={() => setEdit(true)}>edit</button>
                                <button type="button" className="" onClick={deleteHandler}>delete</button>
                            </div>
                        </div>
                    )
                    : <EditNote text = {item.text} edit={editHandler} />
            }
        </>
    )
}


export default Note;