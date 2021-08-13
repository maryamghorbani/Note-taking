import React , { Component } from 'react';
import './App.css';


// Import Components
import Header from './Header';
import FormAddTodo from './FormAddTodo';
import Note from './Note';




class App extends Component {

	state = {
		todos : []
	}


	addNote(text) {
		this.setState(prevState => {
            return {
                todos : [
                    ... prevState.todos,
                    { key : Date.now() , done : false , text }
                ]
            }
        })
	}

    deleteNote(key) {
	    this.setState(prevState => {
	        return {
	            todos : prevState.todos.filter( item => item.key !== key )
            }
        })
    }

    editNote(key , text) {
	    let { todos } = this.state;
	    let item = todos.find(item => item.key === key);
	    item.text = text;

	    let newNote = todos.filter(item => item.key !== key)

        this.setState({
            todos : [
                ... newNote,
                item
            ]
        })
    }



    render() {
	    
	    let {todos} = this.state;
	    
        return (
            <div className="App">
                <Header />
                <main className="main">
                    <section className="">
                        <div className="take-note">
                            <FormAddTodo add={this.addNote.bind(this)} />
                        </div>
                    </section>
                    <div className="Notes">
                        {
                            todos.length === 0
                                ? <p>There isn't any notes</p>
                                : todos.map(item => <Note
                                                        key={item.key}
                                                        item={item}
                                                        delete={this.deleteNote.bind(this)}
                                                        edit={this.editNote.bind(this)}
                                                    />
                                                    )
                        }
                    </div>
                </main>
            </div>
        )
    }
}


export default App;
