// import Menu from "./MenuTreeBuilder";
import "../../styles/side-bar.module.css"
import React, {useState} from "react";
import "antd/dist/antd.css"
import {v4 as uuidv4} from 'uuid';

const menuTreeJSON = require("../../public/admin/static/menu-tree.json");
import {Menu} from 'antd';
import Link from "next/link";

const {SubMenu} = Menu;


const renderSideBar = items => {
    return (
        <>
            {items.map((item, index) => {
                console.log("UUID", uuidv4())
                console.log(index, item)
                if (item.children) {
                    return (
                            <SubMenu key={uuidv4()} title={item.title}>
                                {console.log("TiTLE.........", item.title)}
                                {item.children && renderSideBar(item.children)}
                            </SubMenu>
                    )
                }
                return (
                        <Menu.Item key={uuidv4()}>
                            <Link href={item.link}>
                                <a>{item.text}</a>
                            </Link>
                        </Menu.Item>
                )
            })}
        </>
    )
}

function SideBar(props) {
    const [theme, setTheme] = useState("light")
    const [current, setCurrent] = useState("1")

    const changeTheme = value => {
        setTheme(() => {
            return value ? 'dark' : 'light'
        });
    };

    const handleClick = e => {
        console.log('click ', e);
        setCurrent(() => {
            return e.key;
        });
    };

    return (
        <>
            <Menu
                theme={theme}
                onClick={handleClick}
                style={{width: 256}}
                // defaultOpenKeys={['sub1']}
                selectedKeys={[current]}
                mode="inline"
            >
                {renderSideBar(menuTreeJSON.menu)}
            </Menu>
        </>
    );

}

export default SideBar;