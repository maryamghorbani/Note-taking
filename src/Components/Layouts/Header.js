import React , { useContext } from 'react';
import './CSS/Header.css';
import AuthContext from '../../Context/auth';

import { Link } from 'react-router-dom';

function Header() {

    const authContext = useContext(AuthContext);

    let doLogin = () => authContext.dispatch({ type : 'login_user' });
    let doLogout = () => authContext.dispatch({ type : 'logout_user'});

    return (
        <header>
            <div className="main-navbar">
                <a href="#" className="">
                    <strong>TODO APP</strong>
                </a>
                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                    {
                        ! authContext.authenticated
                            ? <button className="login-btn" onClick={doLogin}>login</button>
                            : <button className="logout-btn" onClick={doLogout}>logout</button>
                    }
            </div>
        </header>
    )
}


export default Header;