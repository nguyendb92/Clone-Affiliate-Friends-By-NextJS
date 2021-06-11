import React from 'react';
import {Navbar, Nav, NavDropdown, NavLink} from "react-bootstrap";


function Header(props) {
    return (
        <>
            {props.children}
        </>
    )
}

export default Header;