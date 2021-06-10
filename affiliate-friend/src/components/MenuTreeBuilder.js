import React from 'react';
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
            <ul>{items.map(item => {
                return <li className={item.classes && typeof item.classes === "string" ? item.classes : ''}>
                    <Link href={item.link}>
                        <a>
                            {item.text}
                            {item.classes && item.classes.includes("module") ? element : ''}
                        < /a>
                    </Link>
                    <ul className="nav nav-second-level collapse" aria-expanded="false">
                        {item.children && renderMenu(item.children)}
                    </ul>
                </li>
            })}
            </ul>
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