import Head from "next/head";
import "../../../src/components/fontawesome";
import "../../../styles/dashboard.module.css"
import ReportLayout from "../../../src/layout/layout";
import ReportTable from "../../../src/components/report-table";


function ItemReward() {

    return (
        <>
            <Head>
                <title> TOP | ASP統合システム 運営者向け機能 </title>
            </Head>
            <ReportLayout>
                <ReportTable/>
            </ReportLayout>
        </>

    )
}

export default ItemReward;