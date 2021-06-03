import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { DatePicker, Radio, Space } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import Select, { components } from 'react-select'
import Checkbox from "antd/lib/checkbox/Checkbox";
import axios from 'axios';
import ApiWorker from "../services/api";
import {URL_ITEM_REWARD, URL_API_SERVER} from '../../constants/admin/index';


export default function ReportForm(props) {
    const dateFormat = "MM/DD/YYYY";
    const monthFormat = "YYYY/MM";
    const today = new Date();
    const twoMonthBefore = new Date(today.getFullYear(), today.getMonth() - 1, 0);

    const [selectedSite, setSelecedtSite] = useState([]);
    const [aspSelected, setAspSelected] = useState([]);
    const [referenceDateType, setReferentceDateType] = useState(0);
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);
    const [startMonth, setStartMonth] = useState(twoMonthBefore);
    const [endMonth, setEndMonth] = useState(today);
    const [reportStatus, setReportStatus] = useState([1, 2, 3]);

    const [sitesOption, setSitesOption] = useState([]);
    const [aspOptions, setAspOptions] = useState([]);

    useEffect(() => {
        const url = `http://localhost:8010/api/get-all-websites?user_id=4724`;
        axios.get(url)
            .then(res => {
                const sites = res.data;
                setSitesOption(sites);
                setSelecedtSite(sites);
            });


        const aspUrl = `http://localhost:8010/api/get-all-asp`;
        axios.get(aspUrl)
            .then(res => {
                setAspOptions(res.data);
                setAspSelected(res.data);
            })
    }, []);

    const handleChangeSite = (e) => {
        let siteSelectTemp = []
        e.forEach(item => {
            siteSelectTemp.push(item.value);
        });
        setSelecedtSite(siteSelectTemp);
    }

    const handleChangeAsp = (e) => {
        let aspSelectTemp = []
        e.forEach(item => {
            aspSelectTemp.push(item.value);
        });
        setAspSelected(aspSelectTemp);
    }

    const handleChangeReferenceDateType = (e) => {
        setReferentceDateType(e.target.value);
    }

    const handleChangeReportStatus = (e) => {
        let { value, checked } = e.target;

        if (!checked) {
            let reportStatusTemp = [...reportStatus];
            reportStatusTemp = reportStatusTemp.filter(status => {
                return status !== value;
            })
            setReportStatus(reportStatusTemp);
        } else {
            setReportStatus(reportStatus => [...reportStatus, value]);
        }
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



    const submitForm = async (e) => {
        e.preventDefault();
        let data = {};

        if (props.siteSelect) {
            data['select_website'] = [];
            for (let site of selectedSite) {
                data['select_website'].push(site.website_url);
            }
        }

        if (props.aspSelect) {
            data['select_asp'] = [];
            for (let asp of aspSelected) {
                data['select_asp'].push(asp.id);
            }
        }

        if (props.referenceDate) {
            data['date_report_type'] = referenceDateType;
        }

        if (props.dateSelect) {
            data['target_start_date'] = `${startDate.getFullYear()}-${startDate.getMonth() < 9 ? 0 : ""}${startDate.getMonth() + 1}-${startDate.getDate() < 9 ? 0: ""}${startDate.getDate()}`;
            data['target_end_date'] = `${endDate.getFullYear()}-${endDate.getMonth() < 9 ? 0 : ""}${endDate.getMonth() + 1}-${endDate.getDate() < 9 ? 0: ""}${endDate.getDate()}`;
        }

        if (props.reportStatus) {
            data['status_filter'] = [reportStatus];
        }

        data['user_id'] = 4724;

        if (props.reportType === "order") {
            let res = await postData(GENERATE_ORDER_REPORT_URL, data);
            if (res.statusText === "OK") {
                props.onReceiveResult(res.data);
            } else {
                console.log(res);
            }
        }

        if (props.reportType === "asp") {
            console.log(data);
            let res = await postData(GET_ASP_REPORT_URL, data);
            if (res.statusText === "OK") {
                props.onReceiveResult(res.data);
                console.log(res);
            } else {
                console.log(res);
            }
        }
    }

    return (
        <section className="refinesearch">
            <form id="formSearch" onSubmit={submitForm}>
                <div className="content">
                    <h3>絞り込み検索</h3>
                    {props.siteSelect &&
                        <dl>
                            <dt>サイト選択</dt>
                            <dd>
                                <div className="form-group">
                                    <Select
                                        options={sitesOption.map(site => ({
                                            value: site.website_url,
                                            label: site.website_name
                                        }))}
                                        isMulti
                                        onChange={handleChangeSite}
                                        isClearable={false}
                                        hideSelectedOptions={false}
                                        defaultValue={sitesOption.map(site => ({
                                            value: site.website_url,
                                            label: site.website_name
                                        }))}
                                        components={{
                                            ValueContainer: ({ children, ...props }) => {
                                                let { getValue, hasValue } = props;
                                                let nbValue = getValue().length;

                                                if (!hasValue || nbValue < 2) {
                                                    return (
                                                        <components.ValueContainer {...props} >
                                                            {children}
                                                        </components.ValueContainer>
                                                    );
                                                }
                                                return (
                                                    <components.ValueContainer {...props}>
                                                        {`(${nbValue}/${sitesOption.length}) サイトの選択`}
                                                    </components.ValueContainer>
                                                );
                                            },
                                            IndicatorSeparator: () => null
                                        }
                                        }
                                    />
                                </div>
                            </dd>
                        </dl>
                    }
                    {props.aspSelect &&
                        <dl>
                            <dt>ASP選択</dt>
                            <dd>
                                <div className="form-group">
                                    <Select
                                        options={aspOptions.map(asp => ({
                                            value: asp.id,
                                            label: asp.label
                                        }))}
                                        onChange={handleChangeAsp}
                                        isMulti
                                        isClearable={false}
                                        hideSelectedOptions={false}
                                        defaultValue={aspSelected.map(asp => ({
                                            value: asp.id,
                                            label: asp.label
                                        }))}
                                        components={{
                                            ValueContainer: ({ children, ...props }) => {
                                                let { getValue, hasValue } = props;
                                                let nbValue = getValue().length;

                                                if (!hasValue || nbValue < 2) {
                                                    return (
                                                        <components.ValueContainer {...props}>
                                                            {children}
                                                        </components.ValueContainer>
                                                    );
                                                }
                                                return (
                                                    <components.ValueContainer {...props}>
                                                        {`(${nbValue}/${aspOptions.length}) ASPの選択`}
                                                    </components.ValueContainer>
                                                );
                                            },
                                            IndicatorSeparator: () => null
                                        }
                                        }
                                    />
                                </div>
                            </dd>
                        </dl>
                    }
                    {props.referenceDate &&
                        <dl>
                            <dt>基準日</dt>
                            <dd>
                                <div className="radio">
                                    <Radio.Group style={{ marginBottom: "20px" }} value={referenceDateType} onChange={handleChangeReferenceDateType}>
                                        <Radio value={0}>&nbsp;発生日</Radio>
                                        <Radio value={1}>&nbsp;確定日</Radio>
                                    </Radio.Group>
                                </div>
                            </dd>
                        </dl>
                    }
                    {props.dateSelect &&
                        <dl>
                            <dt>レポート期間</dt>
                            <dd>
                                <div className="form-inline">
                                    <Space direction="horizontal">
                                        <DatePicker
                                            defaultValue={moment(startDate, dateFormat)}
                                            format={dateFormat}
                                            className="form-control"
                                            value={moment(startDate, dateFormat)}
                                        />
                                        &nbsp;&nbsp;〜&nbsp;&nbsp;
                                        <DatePicker
                                            defaultValue={moment(endDate, dateFormat)}
                                            format={dateFormat}
                                            className="form-control"
                                            value={moment(endDate, dateFormat)}
                                        />
                                    </Space>
                                </div>
                                <div className="sortBtnArea">
                                    <div className="btnArea1">
                                        <label htmlFor="ReportTargetDateType1m" className="radio-inline" onClick={getPreviousMonth}>
                                            <input type="radio" name="target_date_type" id="ReportTargetDateType1m"
                                                className="target_date_type" value="1m" />
                                            <svg className="bi bi-chevron-left" width="1em" height="1em" viewBox="0 0 20 20"
                                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                    d="M13.354 3.646a.5.5 0 010 .708L7.707 10l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                        前月
                                    </label>
                                        <label htmlFor="ReportTargetDateType1mp" className="radio-inline" onClick={getNextMonth}>
                                            <input type="radio" name="target_date_type" id="ReportTargetDateType1mp"
                                                className="target_date_type" value="1mp" />
                                            <svg className="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 20 20"
                                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                    d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                        翌月
                                        </label>
                                        <label htmlFor="ReportTargetDateType0m" className="radio-inline" onClick={getCurrentMonth}>
                                            <input type="radio" name="target_date_type" id="ReportTargetDateType0m"
                                                className="target_date_type" value="0m" />今月
                                         </label>
                                    </div>
                                    <div className="btnArea2">
                                        <label htmlFor="ReportTargetDateType1d" className="radio-inline" onClick={getPreviousDate}>
                                            <input type="radio" name="target_date_type" id="ReportTargetDateType1d"
                                                className="target_date_type" value="1d" />
                                            <svg className="bi bi-chevron-left" width="1em" height="1em" viewBox="0 0 20 20"
                                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                    d="M13.354 3.646a.5.5 0 010 .708L7.707 10l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                            前日
                                        </label>
                                        <label htmlFor="ReportTargetDateType1dp" className="radio-inline" onClick={getNextDate}>
                                            <input type="radio" name="target_date_type" id="ReportTargetDateType1dp"
                                                className="target_date_type" value="1dp" />
                                            <svg className="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 20 20"
                                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                    d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                            翌日
                                        </label>
                                        <label htmlFor="ReportTargetDateType0d" className="radio-inline" onClick={getToday}>
                                            <input name="target_date_type" type="radio" className="target_date_type"
                                                id="ReportTargetDateType0d" value="0d" />今日
                                            </label>
                                    </div>
                                    <label htmlFor="ReportTargetDateType30ds" className="radio-inline" onClick={getPrevious30Days}>
                                        <input type="radio" name="target_date_type" id="ReportTargetDateType30ds"
                                            className="target_date_type" value="30ds" />直近30日
                                    </label>
                                    <label htmlFor="ReportTargetDateType60ds" className="radio-inline" onClick={getPrevious60Days}>
                                        <input type="radio" name="target_date_type" id="ReportTargetDateType60ds"
                                            className="target_date_type" value="60ds" />直近60日
                                    </label>
                                </div>
                            </dd>
                        </dl>
                    }
                    {props.monthSelect &&
                        <dl>
                            <dt>レポート期間</dt>
                            <dd>
                                <div className="form-inline">
                                    <Space direction="horizontal">
                                        <DatePicker
                                            picker="month"
                                            defaultValue={moment(startMonth, monthFormat)}
                                            format={monthFormat}
                                            className="form-control"
                                            placeholder=""
                                            value={moment(startMonth, monthFormat)}
                                        />
                                        &nbsp;&nbsp;〜&nbsp;&nbsp;
                                        <DatePicker
                                            picker="month"
                                            defaultValue={moment(endMonth, monthFormat)}
                                            format={monthFormat}
                                            className="form-control"
                                            placeholder=""
                                            value={moment(endMonth, monthFormat)}
                                        />
                                    </Space>
                                </div>
                                <div className="sortBtnArea">
                                    <div className="btnArea1">
                                        <label htmlFor="ReportTargetDateType0m" className="radio-inline" onClick={getCurrentMonth}>
                                            <input type="radio" name="target_date_type_copy" id="ReportTargetDateType0m"
                                                className="target_date_type" value="0m" />今月
                                        </label>
                                        <label htmlFor="ReportTargetDateType1m" className="radio-inline" onClick={getPreviousMonth}>
                                            <input type="radio" name="target_date_type_copy" id="ReportTargetDateType1m"
                                                className="target_date_type" value="1m" />
                                            <svg className="bi bi-chevron-left" width="1em" height="1em" viewBox="0 0 20 20"
                                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                    d="M13.354 3.646a.5.5 0 010 .708L7.707 10l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                            前月
                                        </label>
                                        <label htmlFor="ReportTargetDateType1mp" className="radio-inline" onClick={getNextMonth}>
                                            <input type="radio" name="target_date_type_copy" id="ReportTargetDateType1mp"
                                                className="target_date_type" value="1mp" />
                                            <svg className="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 20 20"
                                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                    d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                            翌月
                                        </label>
                                    </div>
                                    <div className="btnArea2">
                                        <label htmlFor="ReportTargetDateType3ms" className="radio-inline" onClick={getNumofMonthBefore(3)}>
                                            <input type="radio" name="target_date_type_copy"
                                                id="ReportTargetDateType3ms"
                                                className="target_date_type" value="3ms" />直近3ヶ月
                                        </label>
                                        <label htmlFor="ReportTargetDateType6ms" className="radio-inline" onClick={getNumofMonthBefore(6)}>
                                            <input type="radio" name="target_date_type_copy"
                                                id="ReportTargetDateType6ms"
                                                className="target_date_type" value="6ms" />直近6ヶ月
                                        </label>
                                        <label htmlFor="ReportTargetDateType12ms" className="radio-inline" onClick={getNumofMonthBefore(12)}>
                                            <input type="radio" name="target_date_type_copy"
                                                id="ReportTargetDateType12ms"
                                                className="target_date_type" value="12ms" />直近12ヶ月
                                        </label>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    }
                    {props.reportStatus &&
                        <dl>
                            <dt>承認状態</dt>
                            <dd>
                                <div className="checkbox">
                                    <div className="form-check form-check-inline" required>
                                        <Checkbox defaultChecked={true} onChange={handleChangeReportStatus} value={1}>未確定</Checkbox>
                                    </div>
                                    <div className="form-check form-check-inline" required>
                                        <Checkbox defaultChecked={true} onChange={handleChangeReportStatus} value={2}>承認</Checkbox>
                                    </div>
                                    <div className="form-check form-check-inline" required>
                                        <Checkbox defaultChecked={true} onChange={handleChangeReportStatus} value={3}>却下</Checkbox>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    }
                    <div className="btnArea">
                        <button className="btn-primary key mrg_bottom" type="submit">レポートを表示</button>
                        <button className="btn-light btn-xs p-2 border" type="reset">検索条件をリセット</button>
                    </div>
                </div>
            </form>
        </section>
    )
}