import Menu from "./MenuTreeBuilder";

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