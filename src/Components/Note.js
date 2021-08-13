import React from 'react';
import './Note.css';


function Note(props) {

    return (
        <div className="Note">
                <div>
                    {props.item.text}
                </div>
                <div>
                    <button type="button" className="">edit</button>
                    <button type="button" className="" onClick={() => props.delete(props.item.key)}>delete</button>
                </div>
        </div>
    )
}


export default Note;