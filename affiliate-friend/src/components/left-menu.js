import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import Menu from "./MenuTreeBuilder";
import Link from 'next/link'

const menuTreeJSON = require("../../public/admin/static/menu-tree.json");


function SideBar() {

    return (
        <>
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <Menu data={menuTreeJSON}/>
                </div>
            </div>
        </>

    )
}


export default SideBar