import Head from "next/head";
import AdminHeader from "../components/header";
import NavHeader from "../components/nav-header";
import SideBar from "../components/left-menu";
import React from "react";
import {Layout, Breadcrumb, Space} from 'antd';
import 'antd/dist/antd.css';
import Breadcrumbs from "../../src/components/breadcrumb";

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
                <Layout style={{height:"100vh"}}>
                    <Sider theme="light" style={{height: "100vh", width:"250px"}}>
                        <SideBar/>
                    </Sider>
                    <Layout style={{marginLeft: "15px"}}>
                        {/*<Breadcrumb style={{margin: "15px "}}>*/}
                        {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                        {/*    <Breadcrumb.Item>*/}
                        {/*        <a href="">Application Center</a>*/}
                        {/*    </Breadcrumb.Item>*/}
                        {/*    <Breadcrumb.Item>*/}
                        {/*        <a href="">Application List</a>*/}
                        {/*    </Breadcrumb.Item>*/}
                        {/*    <Breadcrumb.Item>An Application</Breadcrumb.Item>*/}
                        {/*</Breadcrumb>*/}
                        <Breadcrumbs/>
                        <Content style={{minWidth: "595px", margin: "15px"}}>
                            {props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>

        </>

    )
}

export default AdminLayout;