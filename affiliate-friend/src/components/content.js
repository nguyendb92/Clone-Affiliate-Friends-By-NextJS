import Panel from "./panel";
import DataTable from "./data-table";


export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:8003/api/items/`, {
        method: "get",
        headers: {
            "X-CSRFToken": getCookie("csrftoken"),
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    })
    console.log("Rest", res)
    const data = await res.json();
    console.log(data)
    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {datatable: data}, // will be passed to the page component as props
    }
}

function Content({datatable}) {
    return (
        <>
            <div className="row">
                <div className="col-sm-12">

                </div>
            </div>
            <Panel/>
            <DataTable data={datatable}/>
        </>
    )
}


export default Content;
