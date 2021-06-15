import React from "react";
import {Table} from "antd";
import 'antd/dist/antd.css';
import {useEffect} from 'react';
import '../../styles/data-table.module.css'
import {CSVLink, CSVDownload} from "react-csv";


function DataTable(props) {
    const dataSource = props.data
    const CSVData = (props.CustomCSVData !== undefined) ? props.CustomCSVData(dataSource): dataSource
    useEffect(() => {
    })
    return (
        <>
            <div>{props.CSVHeaders ?
                <CSVLink data={CSVData} headers={props.CSVHeaders}>
                    Download CSV
                </CSVLink>
                :
                <CSVLink data={CSVData}>
                    Download CSV
                </CSVLink>
            }
            </div>
            <div>
                <Table dataSource={dataSource} columns={props.columns} scroll={{x: 1300}} bordered={true} exportable/>
            </div>
        </>
    )
}

export default DataTable;