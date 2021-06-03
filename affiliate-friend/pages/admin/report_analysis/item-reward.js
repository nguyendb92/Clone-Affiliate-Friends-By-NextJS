import Head from "next/head";
import Header from "../../../src/components/header";
import "../../../src/components/fontawesome";
import "../../../styles/dashboard.module.css"
import ReportLayout from "../../../src/components/report-layout";


function ItemReward({ItemRewardData}) {

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
                        <ReportLayout/>
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

export default ItemReward;