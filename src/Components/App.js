import React , { useReducer , useEffect } from 'react';
import './App.css';


// Import Components
import Header from './Layouts/Header';
import FormAddNote from './Note/FormAddNote';
import NoteList from './Note/NoteList';

// Import Contexts
import NotesContext from "../Context/Notes";
import AuthContext from '../Context/auth';

// Import Reducers
import AppReducer from './../Reducers/appReducer';
import axios from 'axios';

function App() {

    const [state , dispatch] = useReducer(AppReducer , {
        notes : [],
        authenticated : false
    })

    useEffect(() => {
        axios.get(`https://note-taking-c97bb-default-rtdb.europe-west1.firebasedatabase.app/notes.json`)
            .then(response => jsonHandler(response.data))
            .catch(err => console.log(err));
    },[])

    let jsonHandler = (data) => {
        let notes =  Object
            .entries(data)
            .map(([key , value]) => {
                return {
                    ...value,
                    key
                }
            });

        dispatch({ type : 'init_note' , payload : { notes }})
    }



    return (
        <AuthContext.Provider value={{
            authenticated : state.authenticated,
            dispatch
        }}>
            <NotesContext.Provider value={{
                notes: state.notes,
                dispatch
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
        </AuthContext.Provider>
    )
}

export default App;
