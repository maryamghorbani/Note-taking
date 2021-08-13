import React, {useState} from 'react'

function EditNote(props) {

    const [ text , setText ] = useState(props.text)


    let inputHandler = e => setText(e.target.value);


    return (
        <div className="Note">
            <div>
                <input value={text} onChange={inputHandler} />
            </div>
            <div>
                <button type="button" className="">edit</button>
            </div>
        </div>
    )
}

export default EditNote;