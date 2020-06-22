import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Header extends Component {
    render() {
        return (
            <div className="topnav">
                <a className="active" href="/">Home</a>
                <a className="right" href="/"><Link to="/PageNotFound">Sobre</Link></a>
                <a className="right" href="/"><Link to="/PageNotFound">Contato</Link></a>
                <a className="right" href="/"><Link to="/PageNotFound">Entrar</Link></a>
            </div> 
        )
    }
}