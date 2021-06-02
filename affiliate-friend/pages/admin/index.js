import Head from "next/head";
import Header from "../../src/components/header";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import "../../src/components/fontawesome";
import "../../styles/dashboard.module.css"
import Content from "../../src/components/content";


export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:8003/api/items/`)
    console.log("Rest", res)
    const data = await res.json();
    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {datatable: data}, // will be passed to the page component as props
    }
}

function Admin({datatable}) {
    const columns = [
        {
            title: "NO",
            field: "id",
        },
        {
            title: "ASP名",
            field: "asp_item_name",
        },
        {
            title: "案件ID",
            field: "asp_item_id",
        },
        {
            title: "案件名",
            field: "approval_price",
        },
    ];
    return (
        <>
            <Head>
                <title>
                    TOP | ASP統合システム 運営者向け機能 </title>

                <link href="/admin/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="/admin/css/metisMenu.min.css" rel="stylesheet"/>
                <link href="/admin/css/timeline.css" rel="stylesheet"/>
                <link href="/admin/css/startmin.css" rel="stylesheet"/>
                <link href="/admin/css/morris.css" rel="stylesheet"/>
                <link href="/admin/css/custom-admin-style.css" rel="stylesheet"/>

                <link rel="stylesheet" href="/admin/css/dashboard.css"/>
                <link rel="stylesheet" href="/admin/css/admin.irregular.css"/>
                <link rel="stylesheet" href="/admin/css/custom.css"/>
                <link rel="stylesheet" href="/admin/css/dataTables/dataTables.bootstrap.css"/>
                <link rel="stylesheet" href="/admin/css/dataTables/dataTables.responsive.css"/>
                <link rel="stylesheet" href="/admin/css/parameters.css"/>
            </Head>

            <div id="wrapper" style={{minHeight: "930px"}}>
                <Header/>
                <div id="page-wrapper" style={{minHeight: "595"}}>
                    <div className="container-fluid">
                        <Content dataTable={datatable} columns={columns}/>
                    </div>
                </div>
            </div>


            <script type="text/javascript" src="/admin/js/jquery.min.js"></script>
            <script type="text/javascript" src="/admin/js/bootstrap.min.js"></script>
            <script type="text/javascript" src="/admin/js/metisMenu.min.js"></script>
            <script type="text/javascript" src="/admin/js/startmin.js"></script>
        </>

    )
}

export default Admin;