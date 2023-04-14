import React from "react";
import paleta from '../styles/img/color-palette.png'


const Theme = ({OpenModal}) => {
    return (
        <>
            <a className="menu-item" id="theme" onClick={OpenModal}>
                <span><img src={paleta} /></span>
                <h3>Tema</h3>
            </a>
        </>
    )
}

export default Theme;