import React, { useEffect, useState } from "react";
import "./styles.css";

const SelectorLogo = ({ icons, selectedIcon, setSelectedIcon }) => {
    return (
        <div>
            <div style={{ overflow: "hidden", borderRadius: 5 }}>
                <div className="selector-logo-container">
                    {icons.map((element, i) => {
                        return (
                            <div
                                className="selector-logo-item"
                                style={{
                                    backgroundColor:
                                        i === selectedIcon ? "var(--color-grey)" : "transparent",
                                    borderRadius: 15,
                                }}
                                onClick={() => setSelectedIcon(i)}
                            >
                                <img
                                    src={element}
                                    style={{
                                        objectFit: "contain",
                                        padding: 10,
                                        height: "7vh",
                                        width: "7vh",
                                    }}
                                ></img>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SelectorLogo;
