import React from 'react';
import './Note.css';


function Note(props) {

    return (
        <div className="Note">
                <div>
                    {props.item.text}
                </div>
                <div>
                    <button type="button" className="btn btn-info btn-sm">edit</button>
                    <button type="button" className="btn btn-danger btn-sm ml-1" onClick={() => props.delete(props.item.key)}>delete</button>
                </div>
        </div>
    )
}


export default Note;