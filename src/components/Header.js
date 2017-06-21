import React from 'react';
import logo from '../images/logo.svg';

export class Header extends React.Component {

    render() {
        return (
            <header>
                <img src={logo} alt="logo" />
                <h1>Flix</h1>
            </header>
        )
    }
}