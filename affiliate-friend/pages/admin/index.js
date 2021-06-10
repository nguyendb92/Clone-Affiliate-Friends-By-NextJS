import Head from "next/head";
import Content from "../../src/components/content";
import AdminLayout from "../../src/layout/admin-layout";


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
            title: 'NO',
            dataIndex: 'id',
            key: 'id',
            width: 100,
        },
        {
            title: 'ASP名',
            dataIndex: 'asp_item_name',
            key: 'asp_item_name',
            width: 100,
        },
        {
            title: '案件ID',
            dataIndex: 'asp_item_id',
            key: 'asp_item_id',
            width: 100,
        },
        {
            title: '案件名',
            dataIndex: 'approval_price',
            key: 'approval_price',
            width: 100,
        },
    ];
    return (
        <>
            <Head>
                <title> TOP | ASP統合システム 運営者向け機能</title>
            </Head>
            <AdminLayout>
                <Content dataTable={datatable} columns={columns}/>
            </AdminLayout>
        </>

    )
}

export default Admin;