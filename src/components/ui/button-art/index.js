import React from "react";
import "./styles.css";

const ButtonArt = ({ text, art, icon, colorPrimary }) => {
    return (
        <div className="ba-wrapper">
            <div className="ba-title">
                <p>{text}</p>
            </div>
            <div className="ba-art"><img src={art}></img></div>
            <div className="ba-button" style={{backgroundColor: `var(--color-${colorPrimary})`}}>{icon}</div>
        </div>
    );
};

export default ButtonArt;
