import {Table} from "antd";
import 'antd/dist/antd.css';
import {useEffect} from 'react';
import '../../styles/data-table.module.css'


function DataTable(props) {
    const dataSource = props.data
    useEffect(() => {
        console.log("----------DataTable--------------------------", props)
    })


    return (
        <>
            <div>
                <Table dataSource={dataSource} columns={props.columns} />
            </div>
        </>
    )
}

export default DataTable;