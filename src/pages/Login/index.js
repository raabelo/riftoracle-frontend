// --------------------- LOGIN ---------------------

// importações
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    const navigate = useNavigate();

    const [popup, setPopup] = useState(0);

    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [continuar, setContinuar] = useState(false);

    const fraseOptions = [
        {
            value: "Qual o nome do seu primeiro animal de estimação?",
            label: "Qual o nome do seu primeiro animal de estimação?",
        },
        {
            value: "Em que cidade seu pai nasceu?",
            label: "Em que cidade seu pai nasceu?",
        },
        {
            value: "Qual o nome do seu professor(a) favorito?",
            label: "Qual o nome do seu professor(a) favorito?",
        },
        {
            value: "Nome do seu melhor amigo de infancia",
            label: "Nome do seu melhor amigo de infancia",
        },
        {
            value: "Qual o primeiro nome do seu primo(a) mais velho?",
            label: "Qual o primeiro nome do seu primo(a) mais velho?",
        },
        {
            value: "Em que mês do ano você fez seu primeiro pentakill?",
            label: "Em que mês do ano você fez seu primeiro pentakill?",
        },
    ];

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
                    <label>NOME DE USUÁRIO</label>
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
                    <p className="p-btn-footer-login">NÃO POSSUO UMA CONTA</p>
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
                <div className="col-4 div-container-login">
                    <p>Iniciar sessão</p>
                    <input type={"email"}></input>
                </div>
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
