import React from 'react'
import './CSS/FormAddNote.css'
import NotesContext from "../../Context/Notes";
import AuthContext from '../../Context/auth';
import axios from 'axios';
import noteApi from '../../Api/Notes'

class FormAddNote extends React.Component {
    state = { text : '' }
    static contextType = NotesContext;

    formHandler(e) {
        e.preventDefault();
        // ajax
        if ( this.state.text.length > 1 ) {
            let note = { text : this.state.text };
            noteApi.post(`/notes.json` , note)
                .then(response => this.context.dispatch({ type : 'add_note' , payload : { note : { ...note , key : response.data.name } } }))
                .catch(err => console.log(err))
            //
            this.setState({ text : '' })
        }
    }


    inputHandler(e) { this.setState({ text : e.target.value}) }

    render() {
        return (
            <AuthContext.Consumer>
                { context => (
                    <>
                        {
                            context.authenticated
                                ? (
                                    <form className="form" onSubmit={this.formHandler.bind(this)}>
                                        <div className="">
                                            <input type="text" className="note-input" placeholder="Take a Note ..." value={this.state.text} onChange={this.inputHandler.bind(this)}/>
                                            <button type="submit" className="">add</button>
                                        </div>
                                    </form>
                                )
                                : <p>You must be login</p>
                        }
                    </>
                )
                }
            </AuthContext.Consumer>
        )
    }
}


export default FormAddNote;