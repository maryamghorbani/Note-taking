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


	addTodo(text) {
		this.setState(prevState => {
            return {
                todos : [
                    ... prevState.todos,
                    { key : Date.now() , done : false , text }
                ]
            }
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
                            <FormAddTodo add={this.addTodo.bind(this)} />
                        </div>
                    </section>
                    <div className="todosList">
                            <div className="container">
                                <div className="d-flex flex-column align-items-center ">
                                    <nav className="col-6 mb-3">
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active font-weight-bold" id="nav-home-tab">undone <span className="badge badge-secondary">9</span></a>
                                            <a className="nav-item nav-link font-weight-bold" id="nav-profile-tab">done <span className="badge badge-success">9</span></a>
                                        </div>
                                    </nav>

                                    {
                                        todos.length === 0
                                            ? <p>There isn't any notes</p>
                                            : todos.map(item => <Note key={item.key} text={item.text} />)
                                    }

                                </div>
                        
                            </div>
                    </div>
                </main>
            </div>
        )
    }
}


export default App;
