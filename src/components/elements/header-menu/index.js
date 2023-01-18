import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

// img
import logoLOL from "../../../assets/logos/lol.png";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShare,
    faStar,
    faTrophy,
    faPlus,
    faWallet,
    faHeadset,
    faGhost,
} from "@fortawesome/free-solid-svg-icons";

// components
import ButtonMenu from "../../ui/button-menu";
import InputSearch from "../../ui/input-search";

const HeaderMenu = ({ user, tema = "red" }) => {
    const [menuOpened, setMenuOpened] = useState(false);

    const menuItens = [
        {
            nome: "início",
        },
        {
            nome: "escalação",
        },
        {
            nome: "competições",
        },
        {
            nome: "amigos",
        },
        {
            nome: "estatíticas do cblol",
        },
    ];

    return (
        <>
            <div className="header-menu-mobile">
                <img className="logo-menu-lol mobile" src={logoLOL}></img>
            </div>
            <input
                type={"checkbox"}
                className={"menu-hamburguer"}
                checked={menuOpened}
                onChange={() => {
                    setMenuOpened(!menuOpened);
                }}
            ></input>
            <div
                className="header-menu"
                onClick={() => {
                    setMenuOpened(!menuOpened);
                }}
            >
                <div>
                    <img src={logoLOL} className="logo-menu-lol desktop"></img>
                    {menuItens.map((element) => {
                        return (
                            <ButtonMenu
                                key={"btnMenu-" + element.nome}
                                text={element.nome}
                                bgColor={`var(--color-${tema})`}
                                active={element.nome === "início" ? true : false}
                            ></ButtonMenu>
                        );
                    })}
                </div>
                <div>
                    <InputSearch
                        text={"pesquisar..."}
                        color="white"
                        bgColor={"var(--color-darkgrey)"}
                    ></InputSearch>
                    <div>
                        <p>{user ? user.nome : ""}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderMenu;
