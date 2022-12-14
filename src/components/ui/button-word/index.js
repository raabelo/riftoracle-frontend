import React from "react";
import "./styles.css";

const ButtonWord = ({ color, bgColor, text, pSize }) => {
    return (
        <div className="bw-wrapper" style={{ backgroundColor: bgColor, color: color }}>
            <p style={{ fontSize: pSize }}>{text}</p>
        </div>
    );
};

export default ButtonWord;
