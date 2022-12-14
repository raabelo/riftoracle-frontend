import React from "react";
import "./styles.css";

const ButtonIcon = ({ text, icon, pSize = "var(--font-size-small)" }) => {
    return (
        <div className="bi-wrapper">
            <div>
                <div>{icon}</div>
            </div>
            <p style={{ fontSize: pSize }}>{text}</p>
        </div>
    );
};

export default ButtonIcon;
