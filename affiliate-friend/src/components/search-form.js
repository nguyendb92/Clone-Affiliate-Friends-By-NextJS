import React from "react";
import '../../styles/search.module.css'
import {useEffect, useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import {DatePicker, Radio, Space} from 'antd';
import 'antd/dist/antd.css';
import Checkbox from "antd/lib/checkbox/Checkbox";
import ApiWorker from "../services/api";
import {URL_ITEM_REWARD, LIMIT_DATE_SEARCH} from "../../constants/admin";
import moment from "moment";
import Utils from "../utils/utils";


function SearchForm() {
    const dateFormat = "MM/DD/YYYY";
    const monthFormat = "YYYY/MM";
    const today = new Date();
     // _oneMonthAgo.setMonth(_today.getMonth() - 1)
    let initEndMonth = new Date();
    let initStartMonth = new Date();

    initEndMonth.setMonth(today.getMonth() - LIMIT_DATE_SEARCH.limitEndDate());
    initStartMonth.setMonth( initEndMonth.getMonth() - LIMIT_DATE_SEARCH.initialRange + 1)

    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);
    const [startMonth, setStartMonth] = useState(`${initStartMonth.getMonth() + 1}月`);
    const [startYear, setStartYear] = useState(today.getFullYear());
    const [endYear, setEndYear] = useState(today.getFullYear());
    const [endMonth, setEndMonth] = useState(`${initEndMonth.getMonth() + 1}月`);
    const [referenceDateType, setReferentceDateType] = useState(0);

    useEffect(() => {
        const response = ApiWorker.get(URL_ITEM_REWARD)
    }, []);

    const handleChangeSite = (e) => {
        let siteSelectTemp = []
        e.forEach(item => {
            siteSelectTemp.push(item.value);
        });
        setSelecedtSite(siteSelectTemp);
    }

    const months = new Array()
    for (let i = 1; i <= 12; i++) {
        months.push(`${i}月`)
    }
    const yearList = LIMIT_DATE_SEARCH.initialYearRange()
    const handleChangeReferenceDateType = (e) => {
        setReferentceDateType(e.target.value);
    }

    const handleValidation = (e) => {
        console.log(e.target.value)
        return true;

    }
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidation(e)) {
            console.log("Form valid !")
        } else {
            console.log("Form Invalid !")
        }




    }

    return (
        <>
            <form onSubmit={handleSubmit} className="mb-5" method="get" id="form-search-report" autoComplete="off">
                <div className="text-danger ajax_error mb-3"/>
                <input type="hidden" value="{{ cl.paginator.per_page }}" name="size"/>
                <div className="formSearch col-lg-12">
                    <div className="row no-gutters">
                        <label className="col-md-2 col-xs-4 label-search vertical_center">
                            レポート期間
                        </label>
                        <div className="col-md-10 col-xs-8 input-search form-inline">

                            <div className="form-inline">
                                <select className="form-control" value={startYear} onChange={handleChangeStartYear}>
                                    {yearList.map((data, index) => {
                                        return (<option value={data} key={index}>{data}</option>)
                                    })}
                                </select>
                                <select className="form-control" value={startMonth} onChange={handleChangeStartMonth}>
                                    {months.map((data, index) => {
                                        return (<option value={data} key={index}>{data}</option>)
                                    })}
                                </select>
                                &nbsp;&nbsp;〜&nbsp;&nbsp;
                                <select className="form-control" value={endYear} onChange={handleChangeEndYear}>
                                    {yearList.map((data, index) => {
                                        return (<option value={data} key={index}>{data}</option>)
                                    })}
                                </select>
                                <select className="form-control" value={endMonth} onChange={handleChangeEndMonth}>
                                    {months.map((data, index) => {
                                        return (<option value={data} key={index}>{data}</option>)
                                    })}
                                </select>
                            </div>

                            <div className="sortBtnArea mt-3">
                                <label htmlFor="ReportTargetDateType3m" className="radio-inline">
                                    <input type="radio" name="target_date_type" id="ReportTargetDateType3m"
                                           className="target_date_type" value="3m" onChange={handleChangeRangeMonth}/>
                                    直近3ヶ月
                                </label>
                                <label htmlFor="ReportTargetDateType6m" className="radio-inline">
                                    <input type="radio" name="target_date_type" id="ReportTargetDateType6m"
                                           className="target_date_type" value="6m" onChange={handleChangeRangeMonth}/>
                                    直近6ヵ月
                                </label>
                                <label htmlFor="ReportTargetDateType12m" className="radio-inline">
                                    <input type="radio" name="target_date_type" id="ReportTargetDateType12m"
                                           className="target_date_type" value="12m" onChange={handleChangeRangeMonth}/>
                                    直近12ヶ月
                                </label>
                                <label htmlFor="ReportTargetDateTypeAll" className="radio-inline">
                                    <input type="radio" name="target_date_type" id="ReportTargetDateTypeAll"
                                           className="target_date_type" value="all" onChange={handleChangeRangeMonth}/>
                                    全期間
                                </label>
                            </div>

                        </div>
                        <label className="col-md-2 col-xs-4 label-search">
                            基準日
                        </label>
                        <div className="col-md-10 col-xs-8 input-search check-list">
                            <div className="radio">
                                <Radio.Group style={{marginBottom: "20px"}} value={referenceDateType}
                                             onChange={handleChangeReferenceDateType}>
                                    <Radio value={0}>&nbsp;発生日</Radio>
                                    <Radio value={1}>&nbsp;確定日</Radio>
                                </Radio.Group>
                            </div>
                        </div>
                        <div className="col-md-12 col-xs-12 text-center py-5">
                            <button type="submit" className="btn btn-primary btn-action submit-form">レポートを表示
                            </button>
                        </div>
                        <div className="col-md-12 col-xs-12 text-center no_data_result mt-3"/>

                    </div>
                </div>
            </form>
        </>
    )
}

export default SearchForm;