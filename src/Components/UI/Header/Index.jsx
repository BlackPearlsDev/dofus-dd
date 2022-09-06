import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Dofus Élevage</h1>

            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/generation">Élevage</Link>
                <Link to="/capacity">Capacités</Link>
                <Link to="/mountparkobjects">Objets d'élevage</Link>
            </nav>
        </header>
    )
}

export default Header;