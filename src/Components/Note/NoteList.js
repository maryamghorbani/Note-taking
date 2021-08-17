import React from 'react';
import Note from "./Note";

function NoteList(props) {
    let { notes } = props;
    return (
        <div className="Notes">
            {
                notes.length === 0
                    ? <p>There isn't any notes</p>
                    : notes.map(item => <Note
                        key={item.key}
                        item={item}
                        delete={props.delete}
                        edit={props.edit}
                    />
                    )
            }
        </div>
    )
}

export default NoteList;