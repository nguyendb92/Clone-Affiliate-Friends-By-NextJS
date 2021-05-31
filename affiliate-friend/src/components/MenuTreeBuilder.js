import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";

const element = (
    <span className="arrow">
        <FontAwesomeIcon icon={faChevronLeft} size="sm"
                         style={{width: "6px", heght: "14px"}}/>
    </span>
)
const renderMenu = items => {
    return <ul>{items.map(item => {
            return <li className={item.classes && typeof item.classes === "string" ? item.classes : ''}>
                <a href={item.link}>
                    {item.text}
                    {item.classes && item.classes.includes("module") ? element : ''}
                < /a>
                <ul className="nav nav-second-level collapse" aria-expanded="false">
                    {item.children && renderMenu(item.children)}
                </ul>
            </li>
        })}
    </ul>
}

const Menu = ({data}) => {
    return (
        <ul className="nav in" id="side-menu">
            {renderMenu(data.menu)}
        </ul>
    )


}


export default Menu