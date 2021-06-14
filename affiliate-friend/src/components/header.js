import React from 'react';
import {Navbar, Nav, NavDropdown, NavLink} from "react-bootstrap";


function AdminHeader(props) {
    return (
        <>
            {props.children}
        </>
    )
}

export default AdminHeader;