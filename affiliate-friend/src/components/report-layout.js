import React from 'react';
import {useEffect, useState} from "react";
import {URL_API_SERVER, URL_ITEM_REWARD, URL_ITEM_REWARD_100} from "../../constants/admin";
import ApiWorker from "../services/api";
import SearchForm from "./search-form";
import DownloadForm from "./download-form"
import DataTable from "./data-table";
import "../../styles/report-layout.module.css";



function ReportLayout(props) {
    const [dataTable, setDataTable] = useState([]);
    let [message, setMessage] = React.useState('')
    const columns = [
        {
            title: "NO",
            field: 0,
        },
        {
            title: "ASP名",
            field: 1,
        },
        {
            title: "案件ID",
            field: 2,
        },
        {
            title: "案件名",
            field: 3,
        },
    ];

    useEffect(async () => {
        const response = await ApiWorker.get(URL_ITEM_REWARD_100);
        console.log(response.data)
        setDataTable(response.data);
    }, [])

    useEffect(() => {
        console.log("STATE datatable", dataTable)
    })

    return (
        <>
            <div>
                <div>
                   <SearchForm/>
                </div>

                <div>
                    <DownloadForm/>
                </div>
                <div>
                    <DataTable data={dataTable[0]} columns={columns}/>
                </div>
            </div>
        </>
    )
}

export default ReportLayout;