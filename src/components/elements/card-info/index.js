import React from "react";
import "./styles.css";

const CardInfo = ({ icon, value, color, title, money }) => {
    return (
        <div className="ci-wrapper">
            <div>
                <p>{title}</p>
                <div>{icon}</div>
            </div>
            <div style={{ backgroundColor: `var(--color-${color})` }}>
                <p>{money? ("L$ " + value.toFixed(2)) : (value.toFixed(2) + " pts")}</p>
            </div>
        </div>
    );
};

export default CardInfo;
