import React , { useEffect , useContext } from 'react';

import FormAddNote from "../Components/Note/FormAddNote";
import NoteList from "../Components/Note/NoteList";

import noteApi from "./../Api/Notes";

import NoteContext from "./../Context/Notes"

function Home() {

    const noteContext = useContext(NoteContext);

    useEffect(() => {
        noteApi.get(`/notes.json`)
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

        noteContext.dispatch({ type : 'init_note' , payload : { notes }})
    }


    return (
        <main className="main">
            <section className="">
                <div className="take-note">
                    <FormAddNote />
                </div>
            </section>
            <NoteList />
        </main>
    )
}

export default Home;