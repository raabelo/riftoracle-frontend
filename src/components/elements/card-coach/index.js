import React from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

import iconTop from "../../../assets/icons/lanes/mid.svg";

const CardCoach = ({ coach }) => {
    coach = {
        nick: "tinows",
        captain: true,
        team: "https://thesquad.com.br/wp-content/uploads/2019/07/pain-logo-capa.png",
        photo: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/da/LLL_tinowns_2022_Split_2.png",
        lane: iconTop,
        price: 22.5,
    };

    return (
        <div className="cc-wrapper">
            <div className="cc-flip-card">
                <div className="cc-flip-card-inner">
                    <div className="cc-flip-card-front">
                        <div
                            className="cc-content"
                            style={{ backgroundImage: `url(${coach.photo})` }}
                        >
                            <div>
                                <p>{"L$ " + coach.price.toFixed(2)}</p>
                            </div>
                            <div>
                                <img src={coach.team} style={{ height: 15 }}></img>
                            </div>
                        </div>
                        <div className="cc-footer">
                            <p>{coach.nick}</p>
                        </div>
                    </div>
                    <div className="cc-flip-card-back">
                        <div className="cc-header">
                            <p>{coach.nick}</p>
                        </div>
                        <div className="cc-content"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardCoach;
