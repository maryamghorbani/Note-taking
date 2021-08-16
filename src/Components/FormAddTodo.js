import React, { useState } from 'react';
import './FormAddTodo.css'

function FormAddTodo(props) {


    const [ text , setText ] = useState('');


    let formHandler = e => {
        e.preventDefault();
        props.add(text);
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

export default FormAddTodo;