import Head from "next/head";
import Header from "../components/header";
import "../components/fontawesome";
import "../../styles/dashboard.module.scss"
import NavHeader from "../components/nav-header";
import React from "react";
import SideBar from "../components/left-menu";

function ReportLayout(props) {

    return (
        <>
            <Head>
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
                <Header>
                    <NavHeader/>
                    <SideBar/>
                </Header>
                <div id="page-wrapper" style={{minHeight: "595"}}>
                    <div className="container-fluid">
                        {props.children}
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

export default ReportLayout;