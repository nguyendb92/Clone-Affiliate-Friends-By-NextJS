class Utils {

    static shortcutToChangeDate(date_type) {
        // 3m: 3 month ago
        // 6m: 6 month ago
        // 12m: 12 month ago
        // all: all month from 07/2019
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

        switch (date_type) {
            case '3m':
                updateSelectionDate(_threeMonthAgo, _endDate);
                break;
            case '6m':
                updateSelectionDate(_sixMonthAgo, _endDate);
                break;
            case '12m':
                updateSelectionDate(_twelveMonthAgo, _endDate);
                break;
            default:
                updateSelectionDate(_minStartDate, _endDate);
                break
        }
    }

    static monthRange(startDate, endDate) {
        let start = startDate.split('-');
        let end = endDate.split('-');
        let startYear = parseInt(start[0]);
        let endYear = parseInt(end[0]);
        let dates = [];

        for (let i = startYear; i <= endYear; i++) {
            let endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
            let startMon = i === startYear ? parseInt(start[1]) - 1 : 0;
            for (let j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
                let month = j + 1;
                let displayMonth = month < 10 ? '0' + month : month;
                dates.push([i, displayMonth].join('-'));
            }
        }
        return dates;
    }

    /**
     * Returns a date set to the begining of the month
     *
     * @param {Date} myDate
     * @returns {Date}
     */
    static beginningOfMonth(myDate) {
        let date = new Date(myDate);
        date.setDate(1)
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        return date;
    }

    /**
     * Returns a date set to the end of the month
     *
     * @param {Date} myDate
     * @returns {Date}
     */
    static endOfMonth(myDate) {
        let date = new Date(myDate);
        date.setMonth(date.getMonth() + 1)
        date.setDate(0);
        date.setHours(23);
        date.setMinutes(59);
        date.setSeconds(59);
        return date;
    }

    static normalizeDate(dateStr) {
        if (dateStr) {
            dateStr = dateStr.replace(/-/g, "/");
        }
        const d = new Date(dateStr)

        if (d == 'Invalid Date' || !dateStr) {
            return ''
        }

        // format 'Y-m-d H:i:s'
        let y = d.getFullYear()
        let m = d.getMonth() + 1
        let day = d.getDate()
        let h = d.getHours()
        let i = d.getMinutes()
        let s = d.getSeconds()

        m = m.toString().padStart(2, '0')
        day = day.toString().padStart(2, '0')
        h = h.toString().padStart(2, '0')
        i = i.toString().padStart(2, '0')
        s = s.toString().padStart(2, '0')

        return `${y}-${m}-${day} ${h}:${i}:${s}`
    };

    static formatDateTime(datetime) {
        let html = '';
        if (datetime) {
            let datetime_convert = new Date(datetime.replace(/-/g, "/"))

            let day = datetime_convert.getDate()
            day = day < 10 ? '0' + day : day
            let month = datetime_convert.getMonth() + 1
            month = month < 10 ? '0' + month : month
            let year = datetime_convert.getFullYear()

            let date = year + "-" + month + "-" + day

            let time_convert = datetime_convert.toTimeString().split(' ')[0].split(':')
            let time = time_convert[0] + ':' + time_convert[1] + ':' + time_convert[2]

            html += date + '<br>' + time
        }
        return html
    };

    static formatDate(date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
}

export default Utils;