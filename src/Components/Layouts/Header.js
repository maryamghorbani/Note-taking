import React , { useContext } from 'react';
import './CSS/Header.css';
import AuthContext from '../../Context/auth';
import NoteContext from '../../Context/Notes';


function Header() {

    const noteContext = useContext(NoteContext);
    const authContext = useContext(AuthContext);


    let doLogin = () => authContext.dispatch({ type : 'login_user' });
    let doLogout = () => authContext.dispatch({ type : 'logout_user'});

    return (
        <header>
            <div className="main-navbar">
                <a href="#" className="">
                    <strong>TODO APP</strong>
                </a>
                    {
                        ! authContext.authenticated
                            ? <button className="btn btn-sm btn-success" onClick={doLogin}>login</button>
                            : <button className="btn btn-sm btn-danger" onClick={doLogout}>logout</button>
                    }
            </div>
        </header>
    )
}


export default Header;