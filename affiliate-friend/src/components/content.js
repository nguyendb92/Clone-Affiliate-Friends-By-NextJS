import React from "react";
import Panel from "./panel";
import DataTable from "./data-table";
import {Container, Row} from "react-bootstrap"



function TableContent(props) {
    return (
        <>
            <Container fluid={true}>
                <Row>
                    <Panel/>
                </Row>
                <Row style={{marginTop: "15px"}}>
                    {props.children}
                </Row>
                <Row style={{marginTop: "15px"}}>
                    <DataTable data={props.dataTable} columns={props.columns}/>
                </Row>
            </Container>
        </>
    );
}


export default TableContent;
