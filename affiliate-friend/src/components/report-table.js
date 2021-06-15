import React from 'react';
import {useEffect, useState} from "react";
import {
    LIMIT_DATE_SEARCH,
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
import {NextWebVitalsMetric} from "next/dist/pages/_app";


function ReportTable(props) {
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


    useEffect(async () => {
        const response = await ApiWorker.get(URL_ITEM_REWARD_API,
            {
                "params": {
                    "start_date": `${startYear}-${startMonth.replace('月', '')}`,
                    "end_date": `${endYear}-${endMonth.replace('月', '')}`,
                    "reference_date_type": referenceDateType,
                }
            }
        );

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

    useEffect(() => {
        console.log("STATE startYear", startYear)
        console.log("STATE startMonth", startMonth)
        console.log("STATE endMonth", endMonth)

    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidation(e)) {
            console.log("Form valid !")
            let response = await ApiWorker.get(URL_ITEM_REWARD_API, {
                    "params": {
                        "start_date": `${startYear}-${startMonth.replace('月', '')}`,
                        "end_date": `${endYear}-${endMonth.replace('月', '')}`,
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
            dataIndex: 'index',
            key: 'index',
            width: 50,
        },

        {
            title: 'ASP名',
            dataIndex: 'asp_name',
            key: 'asp_name',
            width: 100,
        },
        {
            title: '案件ID',
            dataIndex: 'asp_item_id',
            key: 'asp_item_id',
            width: 100,
        },
        {
            title: '案件名',
            dataIndex: 'asp_item_name',
            key: 'asp_item_name',
            width: 250,
        },

    ];
    const CSVHeader = [
        {
            label: 'NO',
            key: 'index',
        },

        {
            label: 'ASP名',
            key: 'asp_name',
        },
        {
            label: '案件ID',
            key: 'asp_item_id',
        },
        {
            label: '案件名',
            key: 'asp_item_name',
        },
    ]


    const createColumnMonths = (datatable) => {
        let col = Array.from(columns)
        let header = Array.from(CSVHeader)
        let months = datatable[0]["months"]
        Object.keys(months).forEach((key) => {
            col.push(
                {
                    title: key,
                    children: [
                        {
                            title: "成果件数",
                            dataIndex: `count_${key}`,
                            key: `price`,
                            width: 100,
                        },
                        {
                            title: '成果報酬',
                            dataIndex: `price_${key}`,
                            key: 'price',
                            width: 100,
                        },
                    ],

                })
            header.push({label: "成果件数", key: `count_${key}`})
            header.push({label: "成果報酬", key: `price_${key}`})
        })

        return col
    }
    const createCSVHeader = (datatable) => {
        let header = Array.from(CSVHeader)
        let months = datatable[0]["months"]
        Object.keys(months).forEach((key) => {
            header.push({label: "成果件数", key: `count_${key}`})
            header.push({label: "成果報酬", key: `price_${key}`})
        })
        return header
    }
    const reformatJsonToTable = (datatable) => {
        let clone_table = Array.from(datatable)
        let result = clone_table.map((item) => {
            let new_item = {...item};
            for (let key in new_item["months"]) {
                let count_key = `count_${key}`
                let price_key = `price_${key}`
                new_item[count_key] = new_item["months"][key]['count'];
                new_item[price_key] = new_item["months"][key]['price'];
            }
            return new_item
        })
        console.log("RESULT", result)
        return result
    }

    const customeCSVDataItemReward = (datatable) => {
        let cloneTable = Array.from(datatable)
        let initialHeader1 = ['', '', '', '']
        let initialHeader2 = ["NO", 'ASP名', '案件ID', '案件名']

        let months = Object.keys(datatable[0].months).map((month)=> {
            initialHeader1.push(month)
            initialHeader1.push("")
            initialHeader2.push("成果件数")
            initialHeader2.push("成果報酬")
        })
        let newArray = cloneTable.map((item) => {
                let newItem = {...item}
                delete newItem.months
                return Object.values(newItem)

            }
        )
        newArray.unshift(initialHeader2)
        newArray.unshift(initialHeader1)
    return newArray
    }
    // let columnOfTable = createColumnMonths(dataTable)
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

                {/*<div>*/}
                {/*    <DownloadForm/>*/}
                {/*</div>*/}
                <div>{dataTable.length > 0 &&
                <DataTable data={reformatJsonToTable(dataTable)}
                           columns={createColumnMonths(dataTable)}
                           // CSVHeaders={createCSVHeader(dataTable)}
                           CustomCSVData={customeCSVDataItemReward}
                />
                }
                </div>
            </div>
        </>
    )
}

export default ReportTable;