import '../../styles/download.module.css'

function DownloadForm(){
    return (
        <div className="row mb-5 csv_download mr-2 text-black">
            <button data-href="{% url 'report_analysis_export' %}" type="button" className="btn border"
                    id="export-current-CSV">
                <span className="glyphicon glyphicon-save"></span>
                表示期間 ダウンロード
            </button>
            <button data-href="{% url 'report_analysis_item_reward_datatables_export_csv' %}" type="button"
                    className="btn btn-default border mt-2"
                    id="export-all-CSV">
                <span className="glyphicon glyphicon-save"></span>
                全期間 ダウンロード
            </button>
        </div>
    )
}

export default DownloadForm;