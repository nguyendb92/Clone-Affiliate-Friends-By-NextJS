import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {library} from '@fortawesome/fontawesome-svg-core';
import NavHeader from "./nav-header";
import SideBar from "./left-menu";

library.add(faChevronLeft);

function Header() {
    return (
        <>
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <NavHeader/>
                <SideBar/>
            </nav>
        </>
    )
}

export default Header;