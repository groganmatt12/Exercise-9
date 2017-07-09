import React from 'react';
import { IndexLink, Link } from 'react-router';

export function MainNav() {
    return(
        <nav className="top-right-bar" id="menu">
            <h6 className="hide">Site Navigation</h6>
            <ul className="vertiacal medium-horizontal menu">
                <li> 
                    <indexLink className="pageLink" to="/">Home</indexLink>
                </li>
                <li>
                    <Link className="pageLink" to="/films">Films</Link>
                </li>
                <li>
                    <Link className="pageLink" to= "/actors">Actors</Link>
                </li>
            </ul>
        </nav>
    );
}