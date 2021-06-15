import Head from "next/head";
import "../../../src/components/fontawesome";
import "../../../styles/dashboard.module.css"
// import ReportLayout from "../../../src/layout/layout";
import ReportTable from "../../../src/components/report-table";
import AdminLayout from "../../../src/layout/admin-layout";


function ItemReward() {

    return (
        <>
            <Head>
                <title> TOP | ASP統合システム 運営者向け機能 </title>
            </Head>
            <AdminLayout>
                <ReportTable/>
            </AdminLayout>
        </>

    )
}

export default ItemReward;