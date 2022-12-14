import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "../pages/Login/index";
import Home from "../pages/Home/index";
// import Agenda from "../pages/Agenda/index";

import { isExpired, decodeToken } from "react-jwt";

const Router = () => {
    const [token, setToken] = useState(JSON.parse(sessionStorage.getItem("token")));

    const validateToken = (t) => {
        return !isExpired(t);
    };

    useEffect(() => {
        validateToken();
    }, [token]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login token={token} setToken={setToken} />} />
                <Route
                    path="/home"
                    element={
                        validateToken(token) ? (
                            <Home token={token} />
                            ) : (
                            <Home token={token} />
                            // <Login token={token} setToken={setToken} />
                        )
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
