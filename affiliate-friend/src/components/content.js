import Panel from "./panel";
import DataTable from "./data-table";


function Content(props) {
    return (
        <>
            <div className="row">
                <div className="col-sm-12">

                </div>
            </div>
            <Panel/>
            <DataTable data={props.dataTable} columns={props.columns}/>
        </>
    );
}


export default Content;
