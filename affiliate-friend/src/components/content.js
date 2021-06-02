import Panel from "./panel";
import DataTable from "./data-table";




function Content(props) {
    console.log("PROPS", props)

    //     let result = fetch('http://localhost:8003/api/items/')
    //     .then(response => response.json())
    //     .then(data => {
    //         // console.log(data);
    //         return data
    //         }
    //     )
    //     .catch(error => {
    //       console.error('Error:', error);
    //     })
    //
    // console.log("result", result)
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
