// --------------------- HOME ---------------------

// importações
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

// img
import logoLOL from "../../assets/logos/lol.png";
import iconHeimer from "../../assets/img/art/heimer.svg";
import iconYasuo from "../../assets/img/art/yasuo.svg";
import iconTeemo from "../../assets/img/art/teemo.svg";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShare,
    faStar,
    faTrophy,
    faPlus,
    faWallet,
    faHeadset,
    faGhost
} from "@fortawesome/free-solid-svg-icons";

// components
import ButtonIcon from "../../components/ui/button-icon";
import ButtonWord from "../../components/ui/button-word";
import ButtonMenu from "../../components/ui/button-menu";
import SwitchIcon from "../../components/ui/switch-icon";
import SwitchWord from "../../components/ui/switch-word";
import TableScore from "../../components/ui/table-score";
import ButtonArt from "../../components/ui/button-art";
import InputSearch from "../../components/ui/input-search";
import CardPlayer from "../../components/elements/card-player";
import CardCoach from "../../components/elements/card-coach";
import CardInfo from "../../components/elements/card-info";

const Home = () => {
    const [tema, setTema] = useState(JSON.parse(sessionStorage.getItem("tema")));

    const [menuOpened, setMenuOpened] = useState(false);

    const [switchPreco, setSwitchPreco] = useState(true);
    const [abaCard, setAbaCard] = useState(false);

    const conteudo = [
        {
            nome: "paiN Gaming",
            icone: "https://thesquad.com.br/wp-content/uploads/2019/07/pain-logo-capa.png",
            pontos: 152.5,
        },
        {
            nome: "Loud",
            icone: "https://upload.wikimedia.org/wikipedia/commons/8/8b/LOUD_allmode.png",
            pontos: 155.5,
        },
        {
            nome: "Rensga",
            icone: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/14/Rensga_Esportslogo_square.png",
            pontos: 150.5,
        },
        {
            nome: "Flamengo LosGrandes",
            icone: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/3d/Flamengo_Esportslogo_square.png",
            pontos: 120.5,
        },
        {
            nome: "Corinthians",
            icone: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png",
            pontos: 155.5,
        },
        {
            nome: "paiN Gaming",
            icone: "https://thesquad.com.br/wp-content/uploads/2019/07/pain-logo-capa.png",
            pontos: 152.5,
        },
        {
            nome: "Loud",
            icone: "https://upload.wikimedia.org/wikipedia/commons/8/8b/LOUD_allmode.png",
            pontos: 155.5,
        },
        {
            nome: "Rensga",
            icone: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/14/Rensga_Esportslogo_square.png",
            pontos: 150.5,
        },
        {
            nome: "Flamengo LosGrandes",
            icone: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/3d/Flamengo_Esportslogo_square.png",
            pontos: 120.5,
        },
        {
            nome: "Corinthians",
            icone: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png",
            pontos: 155.5,
        },
        {
            nome: "paiN Gaming",
            icone: "https://thesquad.com.br/wp-content/uploads/2019/07/pain-logo-capa.png",
            pontos: 152.5,
        },
        {
            nome: "Loud",
            icone: "https://upload.wikimedia.org/wikipedia/commons/8/8b/LOUD_allmode.png",
            pontos: 155.5,
        },
        {
            nome: "Rensga",
            icone: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/14/Rensga_Esportslogo_square.png",
            pontos: 150.5,
        },
        {
            nome: "Flamengo LosGrandes",
            icone: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/3d/Flamengo_Esportslogo_square.png",
            pontos: 120.5,
        },
        {
            nome: "Corinthians",
            icone: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png",
            pontos: 155.5,
        },
        {
            nome: "paiN Gaming",
            icone: "https://thesquad.com.br/wp-content/uploads/2019/07/pain-logo-capa.png",
            pontos: 152.5,
        },
    ];

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

    useEffect(() => {
        let t = "red";
        if (!tema) {
            let t = "green";
            setTema(t);
            sessionStorage.setItem("tema", JSON.stringify(t));
        }
        setTema(t);
    }, []);

    return (
        <div className="home-wrapper">
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
                    </div>
                </div>
            </>

            <CardCoach></CardCoach>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <CardInfo
                    money
                    title={"carteira"}
                    icon={<FontAwesomeIcon icon={faWallet} />}
                    color={tema}
                    value={210.55}
                ></CardInfo>
                <CardInfo
                    money
                    title={"total dos players"}
                    icon={<FontAwesomeIcon icon={faHeadset} />}
                    color={tema}
                    value={210.55}
                ></CardInfo>
                <CardInfo
                    money
                    title={"total dos campeões"}
                    icon={<FontAwesomeIcon icon={faGhost} />}
                    color={tema}
                    value={210.55}
                ></CardInfo>
            </div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <CardInfo
                    title={"pts no split"}
                    icon={<FontAwesomeIcon icon={faTrophy} />}
                    color={tema}
                    value={210.55}
                    ></CardInfo>
                <CardInfo
                    title={"pts da última rodada"}
                    icon={<FontAwesomeIcon icon={faStar} />}
                    color={tema}
                    value={210.55}
                ></CardInfo>
                <CardInfo title={""} icon={<></>} color={tema} value={210.55}></CardInfo>
            </div>

            <>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <CardPlayer colorPrimary={tema}></CardPlayer>
                    <CardPlayer colorPrimary={tema}></CardPlayer>
                    <CardPlayer colorPrimary={tema}></CardPlayer>
                    <CardPlayer colorPrimary={tema}></CardPlayer>
                    <CardPlayer colorPrimary={tema}></CardPlayer>
                    <CardPlayer colorPrimary={tema}></CardPlayer>
                    <CardPlayer colorPrimary={tema}></CardPlayer>
                    <CardPlayer colorPrimary={tema}></CardPlayer>
                </div>
            </>

            <>
                <ButtonArt
                    text={"pontos corridos"}
                    colorPrimary={tema}
                    art={iconHeimer}
                    icon={<FontAwesomeIcon icon={faPlus} />}
                ></ButtonArt>
                <ButtonArt
                    text={"torneio eliminatório"}
                    colorPrimary={tema}
                    art={iconYasuo}
                    icon={<FontAwesomeIcon icon={faPlus} />}
                ></ButtonArt>
                <ButtonArt
                    text={"..."}
                    colorPrimary={tema}
                    art={iconTeemo}
                    icon={<FontAwesomeIcon icon={faPlus} />}
                ></ButtonArt>
            </>

            <div style={{ display: "flex", flexDirection: "row" }}>
                <TableScore
                    team={"Corinthians"}
                    title={"CBOLÃO"}
                    dados={conteudo}
                    keyWord={"pontos"}
                    icon={logoLOL}
                    colorTheme={tema}
                    colorPrimary={"var(--color-lightblack)"}
                    colorA={"var(--color-white)"}
                    colorB={"var(--color-lightdetails)"}
                ></TableScore>
                <TableScore
                    team={"Corinthians"}
                    title={"CBOLÃO"}
                    dados={conteudo}
                    keyWord={"pontos"}
                    icon={logoLOL}
                    colorTheme={tema}
                    colorPrimary={"var(--color-lightblack)"}
                    colorA={"var(--color-white)"}
                    colorB={"var(--color-lightdetails)"}
                ></TableScore>
            </div>

            <ButtonWord
                text={"escalar"}
                bgColor={`var(--color-${tema})`}
                color={"var(--color-white)"}
            ></ButtonWord>
            <ButtonIcon
                icon={<FontAwesomeIcon icon={faShare} />}
                text={"compartilhar equipe"}
            ></ButtonIcon>
            <SwitchIcon check={switchPreco} setCheck={setSwitchPreco}></SwitchIcon>
            <SwitchWord
                txtLeft={"invocadores"}
                txtRight={"campeões"}
                bgColor={`var(--color-${tema})`}
                selected={abaCard}
                setSelected={setAbaCard}
            ></SwitchWord>
            <SwitchWord
                txtLeft={"preços"}
                txtRight={"pontos"}
                bgColor={"var(--color-details)"}
                selected={abaCard}
                setSelected={setAbaCard}
            ></SwitchWord>
        </div>
    );
};

export default Home;
