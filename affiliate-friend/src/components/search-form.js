import React from "react";
import '../../styles/search.module.css'
import {useEffect, useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import {DatePicker, Radio, Space} from 'antd';
import 'antd/dist/antd.css';
import Checkbox from "antd/lib/checkbox/Checkbox";
import ApiWorker from "../services/api";
import {URL_ITEM_REWARD} from "../../constants/admin";


function SearchForm() {
    const dateFormat = "MM/DD/YYYY";
    const monthFormat = "YYYY/MM";
    const today = new Date();
    const twoMonthBefore = new Date(today.getFullYear(), today.getMonth() - 1, 0);

    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);
    const [startMonth, setStartMonth] = useState(twoMonthBefore);
    const [endMonth, setEndMonth] = useState(today);
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

    const handleChangeReferenceDateType = (e) => {
        setReferentceDateType(e.target.value);
    }


    const getPreviousMonth = (e) => {
        e.preventDefault();

        if (props.dateSelect) {
            let oneMonthStart = new Date(startDate.getFullYear() - (startDate.getMonth() > 0 ? 0 : 1), (startDate.getMonth() - 1 + 12) % 12, 1);
            oneMonthStart.setHours(0, 0, 0);
            let oneMonthEnd = new Date(startDate.getFullYear(), startDate.getMonth(), 0);
            oneMonthEnd.setHours(23, 59, 59);

            setStartDate(oneMonthStart);
            setEndDate(oneMonthEnd);
        }

        if (props.monthSelect) {
            let previousMonth = new Date(endMonth);
            previousMonth.setMonth(previousMonth.getMonth() - 1);

            setStartMonth(previousMonth);
            setEndMonth(previousMonth);
        }
    }

    const getNextMonth = (e) => {
        e.preventDefault();

        if (props.dateSelect) {
            let nextMonthStart = new Date(startDate);
            nextMonthStart.setMonth(startDate.getMonth() + 1);

            let nextMonthEnd = new Date(nextMonthStart.getFullYear(), nextMonthStart.getMonth() + 1, 0);
            console.log(nextMonthEnd);

            setStartDate(nextMonthStart);
            setEndDate(nextMonthEnd);
        }

        if (props.monthSelect) {
            let nextMonth = new Date(endMonth);
            nextMonth.setMonth(nextMonth.getMonth() + 1);

            setStartMonth(nextMonth);
            setEndMonth(nextMonth);
        }
    }

    const getCurrentMonth = (e) => {
        e.preventDefault();

        if (props.dateSelect) {
            let startDateOfCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
            let endDateOfCurrentMonth = today;

            setStartDate(startDateOfCurrentMonth);
            setEndDate(endDateOfCurrentMonth);
        }

        if (props.monthSelect) {
            setStartMonth(today);
        }
    }

    const getPreviousDate = (e) => {
        e.preventDefault();

        let previousStartDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() - 1);

        setStartDate(previousStartDate);
        setEndDate(previousStartDate);
    }

    const getNextDate = (e) => {
        e.preventDefault();

        let nextStartDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1);

        setStartDate(nextStartDate);
        setEndDate(nextStartDate);
    }

    const getToday = (e) => {
        setStartDate(new Date(today));
        setEndDate(new Date(today));
    }

    const getPrevious30Days = (e) => {
        e.preventDefault();

        let todayTemp = new Date(today);
        todayTemp.setDate(todayTemp.getDate() - 30);
        setStartDate(todayTemp);
    }

    const getPrevious60Days = (e) => {
        e.preventDefault();

        let todayTemp = new Date(today);
        todayTemp.setDate(todayTemp.getDate() - 60);
        setStartDate(todayTemp);
    }

    const getNumofMonthBefore = ((numOfMonth) => {
        let endMonthTem = new Date(endMonth);
        endMonthTem.setMonth(endMonthTem.getMonth() - numOfMonth);

        setStartMonth(endMonthTem);
    })


    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {};

        if (props.siteSelect) {
            data['select_website'] = [];
            for (let site of selectedSite) {
                data['select_website'].push(site.website_url);
            }
        }

        if (props.referenceDate) {
            data['date_report_type'] = referenceDateType;
        }

        if (props.dateSelect) {
            data['target_start_date'] = `${startDate.getFullYear()}-${startDate.getMonth() < 9 ? 0 : ""}${startDate.getMonth() + 1}-${startDate.getDate() < 9 ? 0 : ""}${startDate.getDate()}`;
            data['target_end_date'] = `${endDate.getFullYear()}-${endDate.getMonth() < 9 ? 0 : ""}${endDate.getMonth() + 1}-${endDate.getDate() < 9 ? 0 : ""}${endDate.getDate()}`;
        }
        if (props.reportStatus) {
            data['status_filter'] = [reportStatus];
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

                            <div>
                                {/*{% render_field asf.form.start_year class="form-control mrg_right mrg_bottom" %}*/}
                                {/*{% render_field asf.form.start_month class="form-control" %}*/}
                                {/*&nbsp;&nbsp;〜&nbsp;&nbsp;*/}
                                {/*{% render_field asf.form.end_year class="form-control mrg_right mrg_bottom" %}*/}
                                {/*{% render_field asf.form.end_month class="form-control" %}*/}
                            </div>

                            <div className="sortBtnArea mt-3">
                                <label htmlFor="ReportTargetDateType3m" className="radio-inline">
                                    <input type="radio" name="target_date_type" id="ReportTargetDateType3m"
                                           className="target_date_type" value="3m"/>
                                    直近3ヶ月
                                </label>
                                <label htmlFor="ReportTargetDateType6m" className="radio-inline">
                                    <input type="radio" name="target_date_type" id="ReportTargetDateType6m"
                                           className="target_date_type" value="6m"/>
                                    直近6ヵ月
                                </label>
                                <label htmlFor="ReportTargetDateType12m" className="radio-inline">
                                    <input type="radio" name="target_date_type" id="ReportTargetDateType12m"
                                           className="target_date_type" value="12m"/>
                                    直近12ヶ月
                                </label>
                                <label htmlFor="ReportTargetDateTypeAll" className="radio-inline">
                                    <input type="radio" name="target_date_type" id="ReportTargetDateTypeAll"
                                           className="target_date_type" value="all"/>
                                    全期間
                                </label>
                            </div>

                        </div>
                        <label className="col-md-2 col-xs-4 label-search">
                            基準日
                        </label>
                        <div className="col-md-10 col-xs-8 input-search check-list">
                            {/*{{asf.form.reference_date}}*/}
                        </div>
                        <div className="col-md-12 col-xs-12 text-center py-5">
                            <button type="button" className="btn btn-primary btn-action submit-form">レポートを表示
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