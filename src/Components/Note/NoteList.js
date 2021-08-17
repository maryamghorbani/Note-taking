import React , { useContext } from 'react';
import Note from "./Note";
import NotesContext from "../../Context/Notes";

function NoteList(props) {

    const noteContext = useContext(NotesContext);

    let { notes } = noteContext;

    return (
        <div className="Notes">
            {
                notes.length === 0
                    ? <p>There isn't any notes</p>
                    : notes.map(item => <Note
                        key={item.key}
                        item={item}
                    />
                    )
            }
        </div>
    )
}

export default NoteList;