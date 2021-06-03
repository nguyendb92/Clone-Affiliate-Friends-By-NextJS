class Utils {

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