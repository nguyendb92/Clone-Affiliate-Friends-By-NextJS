import Head from "next/head";
import Header from "../components/header";
import NavHeader from "../components/nav-header";
import SideBar from "../components/left-menu";
import classes from "../../styles/admin-layout.module.css"
import React from "react";
import {Container, Row, Col} from 'react-bootstrap';


function AdminLayout(props) {
    return (
        <>
            <div id="wrapper" style={{minHeight: "930px"}}>
                <Container  style={{height: "50px"}} fluid>
                    <Header>
                        <NavHeader/>
                    </Header>
                </Container>
                <Container fluid={true}>
                    <Row>
                        <Col xs={1}>
                            <SideBar/>
                        </Col>
                        <Col xs={11} style={{minHeight: "595px"}}>
                            <div id="page-wrapper">
                                {props.children}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>

    )
}

export default AdminLayout;