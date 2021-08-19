import React , { useReducer } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';

// Import Components
import Header from './Layouts/Header';

// Import Contexts
import NotesContext from "../Context/Notes";
import AuthContext from '../Context/auth';

// Import Reducers
import AppReducer from './../Reducers/appReducer';

// Import Routes
import Home from "../Routes/Home";
import About from "../Routes/About";

function App() {


    const [state , dispatch] = useReducer(AppReducer , {
        notes : [],
        authenticated : false
    })


    return (
        <Router>
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
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                    </div>
                </NotesContext.Provider>
            </AuthContext.Provider>
        </Router>
    )
}

export default App;
