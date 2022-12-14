import React, { useEffect, useState } from "react";
import "./styles.css";

const TableScore = ({
    title,
    icon,
    colorPrimary,
    colorTheme,
    team,
    colorA,
    colorB,
    dados,
    keyWord,
}) => {
    const [conteudo] = useState(dados);

    return (
        <div className="ts-wrapper">
            <div className="ts-header" style={{ backgroundColor: colorPrimary }}>
                <div>
                    <img src={icon}></img>
                </div>
                <p className="title">{title}</p>
                <p>{keyWord}</p>
            </div>
            <div
                style={{
                    overflow: "hidden",
                    borderBottomLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                }}
            >
                <div className="ts-content">
                    {conteudo
                        .sort((a, b) => {
                            return b.pontos - a.pontos;
                        })
                        .map((element, i) => {
                            while (conteudo.length <= 11) {
                                conteudo.push({ nome: "", foto: "", pontos: 0 });
                            }
                            return (
                                <div
                                    key={title + "-" + i}
                                    style={{
                                        backgroundColor:
                                            i % 2 === 0
                                                ? element.nome === team
                                                    ? `var(--color-${colorTheme})`
                                                    : colorA
                                                : element.nome === team
                                                ? `var(--color-${colorTheme})`
                                                : colorB,
                                    }}
                                >
                                    <div
                                        className="ts-position"
                                        style={{
                                            color:
                                                element.nome === team ? `var(--color-white)` : "",
                                        }}
                                    >
                                        {element.nome ? i + 1 : ""}
                                    </div>
                                    <div
                                        className="ts-icon"
                                        style={{
                                            backgroundColor:
                                                element.nome === team ? `var(--color-white)` : "",
                                        }}
                                    >
                                        {element.icone ? (
                                            <img
                                                src={element.icone}
                                                style={{
                                                    height: "22.5px",
                                                    objectFit: "cover",
                                                    width: "auto",
                                                }}
                                            ></img>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div
                                        className="ts-name"
                                        style={{
                                            fontWeight: element.nome === team ? "bold" : "",
                                            color:
                                                element.nome === team ? `var(--color-white)` : "",
                                        }}
                                    >
                                        {element.nome ? element.nome : ""}
                                    </div>
                                    <div
                                        className="ts-points"
                                        style={{
                                            color:
                                                element.nome === team ? `var(--color-white)` : "",
                                        }}
                                    >
                                        {element.nome ? element.pontos.toFixed(1) : ""}
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default TableScore;
