import React from 'react';
import {Navbar, Nav, NavDropdown, NavLink} from "react-bootstrap";


function Header(props) {
    return (
        <>
            <Navbar className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                {props.children}
            </Navbar>
        </>
    )
}

export default Header;