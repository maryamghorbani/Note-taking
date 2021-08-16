import React, { useState } from 'react';
import './Note.css';
import EditNote from "./EditNote";


function Note(props) {

    const {item} = props;

    const [edit , setEdit] = useState(false);

    return (
        <>
            {
                edit === false
<<<<<<< HEAD
                    ? (
                        <div className="Note">
                            <div>
                                {item.text}
=======
                    ?(
                        <div className="Note">
                            <div>
                                {props.item.text}
>>>>>>> master
                            </div>
                            <div>
                                <button type="button" className="" onClick={() => setEdit(true)}>edit</button>
                                <button type="button" className="" onClick={() => props.delete(props.item.key)}>delete</button>
                            </div>
                        </div>
                    )
<<<<<<< HEAD
                    : <EditNote text = {item.text} />
=======
                    : <EditNote />
>>>>>>> master
            }
        </>
    )
}


export default Note;