import React from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const InputSearch = ({ color, bgColor, text, pSize = "var(--font-size-normal)" }) => {
    return (
        <div className="is-wrapper" style={{ backgroundColor: bgColor }}>
            <input
                type={"text"}
                style={{ color: color, fontSize: { pSize } }}
                placeholder={text}
                maxLength={25}
            ></input>
            <FontAwesomeIcon className="is-icon" icon={faSearch} />
        </div>
    );
};

export default InputSearch;
