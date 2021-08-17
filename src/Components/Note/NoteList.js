import React from 'react';
import Note from "./Note";

function NoteList(props) {
    let { todos } = props;
    return (
        <div className="Notes">
            {
                todos.length === 0
                    ? <p>There isn't any notes</p>
                    : todos.map(item => <Note
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