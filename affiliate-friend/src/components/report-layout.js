import React from 'react';
import {useEffect, useState} from "react";
import {
    LIMIT_DATE_SEARCH,
    URL_ITEM_REWARD_100,
    URL_ITEM_REWARD_API
} from "../../constants/admin";
import ApiWorker from "../services/api";
import SearchForm from "./search-form";
import DownloadForm from "./download-form"
import DataTable from "./data-table";
import "../../styles/report-layout.module.css";
import '../../styles/search.module.css'
import "react-datepicker/dist/react-datepicker.css";
import 'antd/dist/antd.css';


function ReportLayout(props) {
    const today = new Date();
    let initEndMonth = new Date();
    let initStartMonth = new Date();

    initEndMonth.setMonth(today.getMonth() - LIMIT_DATE_SEARCH.limitEndDate());
    initStartMonth.setMonth(initEndMonth.getMonth() - LIMIT_DATE_SEARCH.initialRange + 1)

    const [startMonth, setStartMonth] = useState(`${initStartMonth.getMonth() + 1}月`);
    const [startYear, setStartYear] = useState(today.getFullYear());
    const [endYear, setEndYear] = useState(today.getFullYear());
    const [endMonth, setEndMonth] = useState(`${initEndMonth.getMonth() + 1}月`);
    const [referenceDateType, setReferenceDateType] = useState(0);
    const [dataTable, setDataTable] = useState([]);
    let [startDate, setStartDate] = React.useState(`${startYear}-${startMonth.replace('月', '')}`)
    let [endDate, setEndDate] = React.useState(`${endYear}-${endMonth.replace('月', '')}`)


    useEffect(async () => {
        // const response = await ApiWorker.get(URL_ITEM_REWARD_100)
        const response = await ApiWorker.get(URL_ITEM_REWARD_API,
            {
                "params": {
                    "start_date": startDate,
                    "end_date": endDate,
                    "reference_date_type": referenceDateType,
                }
            }
        );
        console.log(response.data);
        console.log("ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR")
        let dataSource = Object.values(response.data)
        setDataTable(dataSource);
        console.log("DATASOURCE", dataSource)
    }, [])

    useEffect(() => {
        console.log("STATE datatable", dataTable)
    })
    const handleChangeRangeMonth = (e) => {
        let _today = new Date();
        let _oneMonthAgo = new Date();
        let _twoMonthAgo = new Date();
        let _threeMonthAgo = new Date();
        let _sixMonthAgo = new Date();
        let _twelveMonthAgo = new Date();
        let _minStartDate = new Date(Date.parse("2019-07-01"))
        let _endDate;

        _oneMonthAgo.setMonth(_today.getMonth() - 1)
        _twoMonthAgo.setMonth(_today.getMonth() - 2)
        _endDate = _today.getDate() >= 18 ? _oneMonthAgo : _twoMonthAgo

        _threeMonthAgo.setMonth(_endDate.getMonth() - 2)
        _sixMonthAgo.setMonth(_endDate.getMonth() - 5)
        _twelveMonthAgo.setMonth(_endDate.getMonth() - 11)

        switch (e.target.value) {
            case "3m":
                setStartMonth(`${_threeMonthAgo.getMonth() + 1}月`)
                setEndMonth(`${_endDate.getMonth() + 1}月`)
                setStartYear(_threeMonthAgo.getFullYear())
                setEndYear(_endDate.getFullYear())
                break;
            case "6m":
                setStartMonth(`${_sixMonthAgo.getMonth() + 1}月`)
                setEndMonth(`${_endDate.getMonth() + 1}月`)
                setStartYear(_sixMonthAgo.getFullYear())
                setEndYear(_endDate.getFullYear())
                break;
            case "12m":
                setStartMonth(`${_twelveMonthAgo.getMonth() + 1}月`)
                setEndMonth(`${_endDate.getMonth() + 1}月`)
                setStartYear(_twelveMonthAgo.getFullYear())
                setEndYear(_endDate.getFullYear())
                break;
            case 'all':
                setStartMonth(`${_minStartDate.getMonth() + 1}月`)
                setEndMonth(`${_endDate.getMonth() + 1}月`)
                setStartYear(_minStartDate.getFullYear())
                setEndYear(_endDate.getFullYear())
                break;
            default:
                break;

        }
    }

    const handleChangeReferenceDateType = (e) => {
        setReferenceDateType(e.target.value);
    }

    const handleChangeEndMonth = (e) => {
        setEndMonth(e.target.value)
    }

    const handleChangeStartMonth = (e) => {
        setStartMonth(e.target.value)
    }
    const handleChangeEndYear = (e) => {
        setEndYear(e.target.value)
    }

    const handleChangeStartYear = (e) => {
        setStartYear(e.target.value)
    }

    const handleValidation = (e) => {
        console.log(e.target.value)
        return true;

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidation(e)) {
            console.log("Form valid !")
            setStartDate(`${startYear}-${startMonth.replace('月', '')}`)
            setEndDate(`${endYear}-${endMonth.replace('月', '')}`)
            let response = await ApiWorker.get(URL_ITEM_REWARD_API, {
                    "params": {
                        "start_date": startDate,
                        "end_date": endDate,
                        "reference_date_type": referenceDateType,
                    }
                }
            )
            console.log("GET QUERY", response.data)
            let dataSource = Object.values(response.data)
            setDataTable(dataSource);
            console.log("DATASOURCE", dataSource)
        } else {
            console.log("Form Invalid !")
        }


    }

    const columns = [
        {
            title: 'NO',
            dataIndex: 'name',
            key: 'index',
        },
        {
            title: 'asp_item_id',
            dataIndex: 'name',
            key: 'asp_item_id',
        },
        {
            title: 'asp_item_name',
            dataIndex: 'age',
            key: 'asp_item_name',
        },
        {
            title: 'asp_name',
            dataIndex: 'address',
            key: 'asp_name',
        },
    ];

    return (
        <>
            <div>
                <div>
                    <SearchForm
                        startMonth={startMonth}
                        endMonth={endMonth}
                        startYear={startYear}
                        endYear={endYear}
                        referenceDateType={referenceDateType}
                        handleChangeEndMonth={handleChangeEndMonth}
                        handleChangeStartMonth={handleChangeStartMonth}
                        handleChangeEndYear={handleChangeEndYear}
                        handleChangeStartYear={handleChangeStartYear}
                        handleChangeReferenceDateType={handleChangeReferenceDateType}
                        handleChangeRangeMonth={handleChangeRangeMonth}
                        onSubmit={handleSubmit}
                    />
                </div>

                <div>
                    <DownloadForm/>
                </div>
                <div>
                    <DataTable data={dataTable} columns={columns}/>
                </div>
            </div>
        </>
    )
}

export default ReportLayout;