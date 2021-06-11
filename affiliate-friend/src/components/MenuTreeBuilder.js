import React from 'react';
import {Nav} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from 'next/link'

const element = (
    <span className="arrow">
        <FontAwesomeIcon icon="chevron-left" size="sm"
                         style={{width: "6px", heght: "14px"}}/>
    </span>
)
const renderMenu = items => {
    return (
        <>
            {items.map(item => {
                return <Nav.Item className={item.classes && typeof item.classes === "string" ? item.classes : ''}>
                    <Link href={item.link}>
                        <Nav.Link>
                            {item.text}
                            {item.classes && item.classes.includes("module") ? element : ''}
                        </Nav.Link>
                    </Link>
                    <Nav className="nav nav-second-level collapse" aria-expanded="false">
                        {item.children && renderMenu(item.children)}
                    </Nav>
                </Nav.Item>
            })}
        </>
    )
}

const Menu = ({data}) => {
    return (
        <>
            <ul className="nav in" id="side-menu">
                {renderMenu(data.menu)}
            </ul>
        </>
    )


}


export default Menu