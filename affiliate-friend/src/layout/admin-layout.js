import Head from "next/head";
import AdminHeader from "../components/header";
import NavHeader from "../components/nav-header";
import SideBar from "../components/left-menu";
import React from "react";
import {Layout} from 'antd';
import 'antd/dist/antd.css';


const {Header, Sider, Content} = Layout;


function AdminLayout(props) {
    return (
        <>
            <Layout>
                <Header style={{height: "50px"}}>
                    <AdminHeader>
                        <NavHeader/>
                    </AdminHeader>
                </Header>
                <Layout>
                    <Sider style={{height: "250px"}}>
                        <SideBar/>
                    </Sider>
                    <Content style={{minHeight: "595px"}}>
                        {props.children}
                    </Content>
                </Layout>
            </Layout>

        </>

    )
}

export default AdminLayout;