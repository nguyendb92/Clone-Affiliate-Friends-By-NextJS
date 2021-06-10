import React from "react";
import Panel from "./panel";
import DataTable from "./data-table";


function Content(props) {
    return (
        <>
            <Panel/>
            {props.children}
            <DataTable data={props.dataTable} columns={props.columns}/>
        </>
    );
}


export default Content;
