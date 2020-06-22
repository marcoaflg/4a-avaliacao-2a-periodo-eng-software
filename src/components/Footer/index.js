import React from 'react';
import './styles.css';

function Footer () {

    return(
        <footer>
            <div className="footer">
                <div className="container flex">
                    <ul id="menu" className="links flex">
                        <li><a href="/">Ajuda</a></li>
                        <li><a href="/">Parceiros</a></li>
                        <li><a href="/">Quer saber mais?</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;