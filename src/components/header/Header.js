import logo from '../../target.svg';
import React from 'react';
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>STATE</h1>
                <a
                    className="App-link"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    state?
                </a>
            </header>
        );
    }
}

export default Header;