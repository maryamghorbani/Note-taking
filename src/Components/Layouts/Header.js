import React , { useContext } from 'react';
import './CSS/Header.css';
import AuthContext from '../../Context/auth';


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
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About</a></li>
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