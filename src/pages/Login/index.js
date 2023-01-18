// --------------------- LOGIN ---------------------

// importações
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

import toast, { Toaster } from "react-hot-toast";

import Requests from "../../services/requests";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import teamlogos from "../../assets/logos/teamLogos/teamlogos";
import SelectorLogo from "../../components/elements/selector-logo";

const Login = () => {
    const navigate = useNavigate();

    const [popup, setPopup] = useState(0);

    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [continuar, setContinuar] = useState(false);

    const [cadNome, setCadNome] = useState("");
    const [cadEmail, setCadEmail] = useState("");
    const [cadSenha, setCadSenha] = useState("");
    const [cadRepSenha, setCadRepSenha] = useState("");

    const [teamName, setTeamName] = useState("");
    const [teamLogo, setTeamLogo] = useState(4);

    const clearForm = () => {
        setNome("");
        setSenha("");
        setContinuar(false);

        setCadNome("");
        setCadEmail("");
        setCadSenha("");
        setCadRepSenha("");
    };

    function somar(a, b, c) {
        console.log()
    }

    useEffect(() => {
        somar(5, 5, 9);
    }, []);

    const signup = async (e) => {
        e.preventDefault();
        console.log(e);
        // let config = { headers: { "x-access-token": token } };
        let object = {
            nome: cadNome,
            email: cadEmail,
            senha: cadSenha,
        };
        if (cadSenha === cadRepSenha) {
            await Requests.postUser(object)
                .then((res) => {
                    if (res.status === 200) {
                        toast.success("Usuário cadastrado!");
                        clearForm();
                        setPopup(3);
                    } else if (res.status === 409) {
                        toast.error("Nome de usuário ou email já cadastrado");
                    } else {
                        toast.error("Não foi possível cadastrar o usuário");
                    }
                })
                .catch((err) => {
                    toast.error("Não foi possível cadastrar o usuário");
                });
        } else {
            toast.error("As senhas não conferem");
        }
    };

    useEffect(() => {
        // toast.success("Rota cadastrada com sucesso!");
        // toast.error("Rota cadastrada com sucesso!");
    }, []);

    const popupOptions = [
        {
            nome: "login",
            component: (
                <div className="col-4 div-container-login">
                    <p className="p-title-login">Iniciar sessão</p>
                    <label>NOME DE USUÁRIO OU EMAIL</label>
                    <input
                        type={"email"}
                        value={nome}
                        onChange={(e) => {
                            setNome(e.target.value);
                        }}
                        maxLength={25}
                    ></input>
                    <button
                        className="btn-continue-login"
                        onClick={() => {
                            setPopup(1);
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <p
                        className="p-btn-footer-login"
                        onClick={() => {
                            setPopup(2);
                        }}
                    >
                        NÃO POSSUO UMA CONTA
                    </p>
                </div>
            ),
        },
        {
            nome: "password",
            component: (
                <div className="col-4 div-container-login">
                    <p className="p-title-login">Iniciar sessão</p>
                    <label>SENHA</label>
                    <input
                        type={"password"}
                        value={senha}
                        onChange={(e) => {
                            setSenha(e.target.value);
                        }}
                        maxLength={25}
                    ></input>
                    <div>
                        <label>manter conectado</label>
                        <input
                            type={"checkbox"}
                            checked={continuar}
                            onChange={(e) => {
                                setContinuar(e.target.checked);
                            }}
                        ></input>
                    </div>
                    <button
                        className="btn-continue-login"
                        onClick={() => {
                            console.clear();
                            console.log("user: " + nome);
                            console.log("pass: " + senha);
                            let path = "/home";
                            navigate(path);
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <p className="p-btn-footer-login">NÃO LEMBRO MINHA SENHA</p>
                </div>
            ),
        },
        {
            nome: "createUser",
            component: (
                <form className="col-4 div-container-login" onSubmit={signup}>
                    <p className="p-title-login">Criar conta</p>
                    <label>NOME DE USUÁRIO</label>
                    <input
                        required
                        name="nome"
                        type={"text"}
                        value={cadNome}
                        onChange={(e) => {
                            setCadNome(e.target.value);
                        }}
                        maxLength={25}
                    ></input>
                    <label>EMAIL</label>
                    <input
                        required
                        name="email"
                        type={"email"}
                        value={cadEmail}
                        onChange={(e) => {
                            setCadEmail(e.target.value);
                        }}
                        maxLength={25}
                    ></input>
                    <label>SENHA</label>
                    <input
                        required
                        name="senha"
                        type={"password"}
                        value={cadSenha}
                        onChange={(e) => {
                            setCadSenha(e.target.value);
                        }}
                        maxLength={25}
                    ></input>
                    <label>REPITA A SENHA</label>
                    <input
                        required
                        name="repsenha"
                        type={"password"}
                        value={cadRepSenha}
                        onChange={(e) => {
                            setCadRepSenha(e.target.value);
                        }}
                        maxLength={25}
                    ></input>
                    <button type="submit" className="btn-continue-login">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <p className="p-message-footer-login">
                        Ao criar uma conta, você concorda com nossos Termos de Uso e Política de
                        Privacidade
                    </p>
                </form>
            ),
        },
        {
            nome: "createTeam",
            component: (
                <form className="col-4 div-container-login-team" onSubmit={signup}>
                    <div>
                        <p className="p-title-login">Criar time</p>
                    </div>
                    <div>
                        <div style={{ paddingLeft: "5vh", paddingRight: "5vh" }}>
                            <label>NOME DO TIME</label>
                            <input
                                type={"text"}
                                value={teamName}
                                onChange={(e) => {
                                    setTeamName(e.target.value);
                                }}
                                maxLength={50}
                            ></input>
                            <div className="logo-selector">
                                <SelectorLogo
                                    icons={teamlogos}
                                    selectedIcon={teamLogo}
                                    setSelectedIcon={setTeamLogo}
                                ></SelectorLogo>
                            </div>
                        </div>
                        <div className="logo-container">
                            <img
                                src={teamlogos[teamLogo]}
                                width={250}
                                height={250}
                                style={{ objectFit: "contain", padding: 10 }}
                            ></img>

                            <p className="logo-logoname">{teamName}</p>
                            <p className="logo-username">{"fabiyear"}</p>
                            <div className="logo-footer">
                                <button
                                    className="btn-continue-login"
                                    onClick={() => {
                                        setPopup(1);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            ),
        },
    ];

    return (
        <div className="div-bg-img-login">
            <div>
                <Toaster />
            </div>
            <div className="div-detail-hexcircle_in"></div>
            <div className="div-detail-hexcircle_out"></div>
            {popupOptions[popup].component}
        </div>
    );
};

export default Login;
