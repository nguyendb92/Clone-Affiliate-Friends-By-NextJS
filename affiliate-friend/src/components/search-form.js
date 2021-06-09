import React from "react";
import '../../styles/search.module.scss'
import "react-datepicker/dist/react-datepicker.css";
import {Radio} from 'antd';
import 'antd/dist/antd.css';
import {LIMIT_DATE_SEARCH} from "../../constants/admin";


function SearchForm(props) {


    const months = new Array()
    for (let i = 1; i <= 12; i++) {
        months.push(`${i}月`)
    }
    const yearList = LIMIT_DATE_SEARCH.initialYearRange()

    return (
        <>
            <form onSubmit={props.onSubmit} className="mb-5" method="get" id="form-search-report" autoComplete="off">
                <div className="text-danger ajax_error mb-3"/>
                <input type="hidden" value="{{ cl.paginator.per_page }}" name="size"/>
                <div className="formSearch col-lg-12">
                    <div className="row no-gutters">
                        <label className="col-md-2 col-xs-4 label-search vertical_center">
                            レポート期間
                        </label>
                        <div className="col-md-10 col-xs-8 input-search form-inline">

                            <div className="form-inline">
                                <select className="form-control" value={props.startYear}
                                        onChange={props.handleChangeStartYear}>
                                    {yearList.map((data, index) => {
                                        return (<option value={data} key={index}>{data}</option>)
                                    })}
                                </select>
                                <select className="form-control" value={props.startMonth}
                                        onChange={props.handleChangeStartMonth}>
                                    {months.map((data, index) => {
                                        return (<option value={data} key={index}>{data}</option>)
                                    })}
                                </select>
                                &nbsp;&nbsp;〜&nbsp;&nbsp;
                                <select className="form-control" value={props.endYear}
                                        onChange={props.handleChangeEndYear}>
                                    {yearList.map((data, index) => {
                                        return (<option value={data} key={index}>{data}</option>)
                                    })}
                                </select>
                                <select className="form-control" value={props.endMonth}
                                        onChange={props.handleChangeEndMonth}>
                                    {months.map((data, index) => {
                                        return (<option value={data} key={index}>{data}</option>)
                                    })}
                                </select>
                            </div>

                            <div className="sortBtnArea mt-3">
                                <label htmlFor="ReportTargetDateType3m" className="radio-inline">
                                    <input type="radio" name="target_date_type" id="ReportTargetDateType3m"
                                           className="target_date_type" value="3m"
                                           onChange={props.handleChangeRangeMonth}/>
                                    直近3ヶ月
                                </label>
                                <label htmlFor="ReportTargetDateType6m" className="radio-inline">
                                    <input type="radio" name="target_date_type" id="ReportTargetDateType6m"
                                           className="target_date_type" value="6m"
                                           onChange={props.handleChangeRangeMonth}/>
                                    直近6ヵ月
                                </label>
                                <label htmlFor="ReportTargetDateType12m" className="radio-inline">
                                    <input type="radio" name="target_date_type" id="ReportTargetDateType12m"
                                           className="target_date_type" value="12m"
                                           onChange={props.handleChangeRangeMonth}/>
                                    直近12ヶ月
                                </label>
                                <label htmlFor="ReportTargetDateTypeAll" className="radio-inline">
                                    <input type="radio" name="target_date_type" id="ReportTargetDateTypeAll"
                                           className="target_date_type" value="all"
                                           onChange={props.handleChangeRangeMonth}/>
                                    全期間
                                </label>
                            </div>

                        </div>
                        <label className="col-md-2 col-xs-4 label-search">
                            基準日
                        </label>
                        <div className="col-md-10 col-xs-8 input-search check-list">
                            <div className="radio">
                                <Radio.Group style={{marginBottom: "20px"}} value={props.referenceDateType}
                                             onChange={props.handleChangeReferenceDateType}>
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