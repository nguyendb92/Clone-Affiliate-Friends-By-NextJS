import React from "react";
import Panel from "./panel";
import DataTable from "./data-table";


function TableContent(props) {
    return (
        <>
            <Panel/>
            {props.children}
            <DataTable data={props.dataTable} columns={props.columns}/>
        </>
    );
}


export default TableContent;
