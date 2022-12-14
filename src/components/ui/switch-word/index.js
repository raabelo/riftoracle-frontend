import React from "react";
import "./styles.css";

const SwitchWord = ({ txtLeft, txtRight, bgColor, selected, setSelected }) => {
    return (
        <div
            style={{ borderColor: bgColor }}
            className="sw-wrapper"
            onClick={() => {
                setSelected(!selected);
            }}
        >
            <input
                style={{ backgroundColor: bgColor }}
                type="checkbox"
                name="checa"
                checked={selected}
                onChange={() => {
                    setSelected(!selected);
                }}
            ></input>
            <div>
                <p style={{ color: selected ? "var(--color-lightblack)" : "var(--color-white)", marginLeft: "calc(-100%/3)" }}>
                    {txtLeft}
                </p>
            </div>
            <div>
                <p style={{ color: !selected ? "var(--color-lightblack)" : "var(--color-white)", marginLeft: "calc(100%/3)"  }}>
                    {txtRight}
                </p>
            </div>
        </div>
    );
};

export default SwitchWord;
