import React , { Component } from 'react';
import './App.css';


// Import Components
import Header from './Layout/Header';
import FormAddNote from './Note/FormAddNote';
import NoteList from "./Note/NoteList";



// Import Contexts
import NotesContext from "../Context/Notes";




class App extends Component {

    state = {
        notes : []
    }


    addNote(text) {
        this.setState(prevState => {
            return {
                notes : [
                    ... prevState.notes,
                    { key : Date.now() , done : false , text }
                ]
            }
        })
    }

    deleteNote(key) {
        this.setState(prevState => {
            return {
                notes : prevState.notes.filter( item => item.key !== key )
            }
        })
    }
    editNote(key , text) {
        let { notes } = this.state;
        let item = notes.find(item => item.key === key);
        item.text = text;

        let newNote = notes.filter(item => item.key !== key)


        this.setState({
            notes : [
                ... newNote,
                item
            ]
        })
    }

    render() {

        let {notes} = this.state;

        return (
            <NotesContext.Provider value={{
                notes: this.state.notes,
                add: this.addNote.bind(this),
                edit: this.editNote.bind(this),
                delete: this.deleteNote.bind(this)
            }}>
                <div className="App">
                    <Header />
                    <main className="main">
                        <section className="">
                            <div className="take-note">
                                <FormAddNote />
                            </div>
                        </section>
                        <NoteList />
                    </main>
                </div>
            </NotesContext.Provider>
    )
    }
    }
    export default App;
