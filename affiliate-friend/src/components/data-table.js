import {Table} from "antd";
import 'antd/dist/antd.css';
import {useEffect} from 'react';
import '../../styles/data-table.module.css'


function DataTable(props) {
    const dataSource = props.data
    useEffect(() => {
    })

    return (
        <>
            <div>
                <Table dataSource={dataSource} columns={props.columns} scroll={{ x: 1300 }} bordered={true}/>
            </div>
        </>
    )
}

export default DataTable;