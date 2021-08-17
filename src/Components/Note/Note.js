import React, { useState , useContext } from 'react';
import './CSS/Note.css';
import EditNote from "./EditNote";
import NotesContext from "../../Context/Notes";


function Note(props) {

    const noteContext = useContext(NotesContext);

    const {item} = props;

    const [edit , setEdit] = useState(false);

    let editHandler = text => {
        noteContext.edit(item.key , text);
        setEdit(false);
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
                                <button type="button" className="" onClick={() => noteContext.delete(props.item.key)}>delete</button>
                            </div>
                        </div>
                    )
                    : <EditNote text = {item.text} edit={editHandler} />
            }
        </>
    )
}


export default Note;