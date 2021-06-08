import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {library} from '@fortawesome/fontawesome-svg-core';


library.add(faChevronLeft);

function Header(props) {
    return (
        <>
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                {props.children}
            </nav>
        </>
    )
}

export default Header;