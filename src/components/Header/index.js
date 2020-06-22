import React, { Component } from 'react';
import './styles.css';

export default class Header extends Component {
    render() {
        return (
            <div className="topnav">
                <a className="active" href="/">Home</a>
                <a className="right" href="/">Sobre</a>
                <a className="right" href="/">Contato</a>
                <a className="right" href="/">Entrar</a>
            </div> 
        )
    }
}