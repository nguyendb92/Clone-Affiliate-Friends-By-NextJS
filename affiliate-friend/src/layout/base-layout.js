import {Layout} from 'antd';
import React from "react";
import 'antd/dist/antd.css';

const {Header, Footer, Sider, Content, Breadcrumb} = Layout;

function BaseLayout(props) {
    return (
        <>
            <Layout>
                <Sider>{props.children}</Sider>
            </Layout>
        </>
    )
}

export default BaseLayout;