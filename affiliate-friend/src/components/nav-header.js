import React from "react";
import {Container, Navbar, NavDropdown, Nav} from "react-bootstrap";
import style from "../../styles/nav-header.module.css"

function NavHeader(props) {
    return (
        <>
            <Navbar fixed="top" role="navigation">
                <Navbar.Brand className={style.navbarBrand} href="/admin/">
                    ASP統合システム<br/>運営者向け機能
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="admin-navbar-nav"/>
                <Navbar.Collapse id="admin-navbar-nav" className="justify-content-end">
                    <NavDropdown title="User" id="admin-nav-dropdown">
                        <NavDropdown.Item href="/admin/password_change/">パスワードの変更</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="/admin/logout/">ログアウト</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
};

export default NavHeader;