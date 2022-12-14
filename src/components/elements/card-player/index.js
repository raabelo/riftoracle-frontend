import React from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

import iconTop from "../../../assets/icons/lanes/mid.svg";

const CardPlayer = ({ player, colorPrimary }) => {
    player = {
        nick: "tinows",
        captain: true,
        team: "https://thesquad.com.br/wp-content/uploads/2019/07/pain-logo-capa.png",
        photo: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/da/LLL_tinowns_2022_Split_2.png",
        lane: iconTop,
        price: 22.5,
    };

    return (
        <div className="cp-wrapper">
            <div className="cp-flip-card">
                <div className="cp-flip-card-inner">
                    <div
                        className="cp-flip-card-front"
                        style={{ backgroundColor: `var(--color-${colorPrimary})` }}
                    >
                        <div className="cp-header">
                            <div>
                                <img src={player.team}></img>
                            </div>
                            <div>
                                <img src={player.lane}></img>
                            </div>
                        </div>
                        <div
                            className="cp-content"
                            style={{ backgroundImage: `url(${player.photo})` }}
                        >
                            <div>
                                <p>{"L$ " + player.price.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="cp-footer">
                            <FontAwesomeIcon
                                icon={faCrown}
                                style={{
                                    marginTop: -1,
                                    marginLeft: 10,
                                    marginRight: "auto",
                                    height: 20,
                                    opacity: player.captain ? 1 : 0,
                                }}
                            />
                            <p>{player.nick}</p>
                        </div>
                    </div>
                    <div className="cp-flip-card-back">
                        <div className="cp-header"><p>{player.nick}</p></div>
                        <div className="cp-content"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPlayer;
