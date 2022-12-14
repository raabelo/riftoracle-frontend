import React from "react";
import "./styles.css";

const ButtonMenu = ({ text, pColor, bgColor, active, setActive }) => {
    return (
        <div className="bm-wrapper" style={{borderColor: active? bgColor : "transparent"}}>
            <p>{text.toUpperCase()}</p>
        </div>
    );
};

export default ButtonMenu;
