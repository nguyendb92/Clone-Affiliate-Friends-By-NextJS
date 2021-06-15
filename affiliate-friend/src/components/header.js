import React from 'react';
import {Navbar, Nav, NavDropdown, NavLink} from "react-bootstrap";
import {Menu} from 'antd';

function AdminHeader(props) {
    return (
        <>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="alipay" style={{
                    fontSize: "12px",
                    lineHeight: "16px",
                    display: "flex",
                    alignItems: "center",
                    padding: "15px 15px",
                    float: "left",
                    height: "50px"
                }}>
                    <a href="/admin">
                        ASP統合システム<br/>運営者向け機能
                    </a>
                </Menu.Item>
            </Menu>
        </>
    )
}

export default AdminHeader;