import Login from '../../src/components/sign-in'
import Head from "next/head"

export default function login() {
    return (
        <>
        <Head>
            <title>ログイン | Affiliate Friends</title>
            <link rel="stylesheet" href="/admin/css/bootstrap.min.css"></link>
            <link rel="stylesheet" href="/admin/css/font-awesome.min.css"></link>
            <link rel="stylesheet" href="/admin/css/metisMenu.min.css"></link>
            <link rel="stylesheet" href="/admin/css/startmin.css"></link>
        </Head>
            <main className="main_content side_close page_normal">
                <Login />
            </main>
        </>
    )
}