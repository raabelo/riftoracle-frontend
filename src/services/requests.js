import Axios from "axios";
import api from "../environment/backend";

class Requests {
    static auth = async (object) => {
        let content;
        await Axios.post(api + "/auth", object)
            .then((res) => {
                const response = res.data;
                content = response;
            })
            .catch((res, err) => {
                return err;
            });
        return content;
    };

    static postUser = async (object) => {
        let content;
        await Axios.post(api + "/user", object)
            .then((res) => {
                const response = res;
                content = response;
            })
            .catch((res, err) => {
                const response = res.response;
                content = response;
            });
        return content;
    };

    static putNovaSenha = async (object, config) => {
        let content;
        await Axios.put(api + "/alterarSenha", object, config)
            .then((res) => {
                const response = res.data;
                content = response;
            })
            .catch((res, err) => {
                return err;
            });
        return content;
    };

    static forgotPass = async (object) => {
        let content;
        await Axios.get(api + "/requerirSenha", object)
            .then((res) => {
                const response = res.data;
                content = response;
            })
            .catch((res, err) => {
                return err;
            });
        return content;
    };

    static getTecnicos = async (config) => {
        let content;
        await Axios.get(api + "/usuarios/Tecnico", config)
            .then((res) => {
                const response = res.data;
                content = response;
            })
            .catch((res, err) => {
                return err;
            });
        return content;
    };

    static postTecnicos = async (object, config) => {
        let content;
        await Axios.post(api + "/usuarios/Tecnico", object, config)
            .then((res) => {
                const response = res.data;
                content = response;
            })
            .catch((res, err) => {
                return err;
            });
        return content;
    };

    static putTecnicos = async (object, config) => {
        let content;
        await Axios.put(api + "/usuarios/Tecnico", object, config)
            .then((res) => {
                const response = res.data;
                content = response;
            })
            .catch((res, err) => {
                return err;
            });
        return content;
    };

    static deleteTecnicos = async (object, config) => {
        let content;
        await Axios.delete(api + "/usuarios/" + object.id, config)
            .then((res) => {
                const response = res.data;
                content = response;
            })
            .catch((res, err) => {
                return err;
            });
        return content;
    };

    static getRotas = async (config) => {
        let content;
        await Axios.get(api + "/rotas", config)
            .then((res) => {
                const response = res.data;
                content = response;
            })
            .catch((res, err) => {
                return err;
            });
        return content;
    };

    static postRotas = async (object, config) => {
        let content;
        await Axios.post(api + "/rotas", object, config)
            .then((res) => {
                const response = res.data;
                content = response;
            })
            .catch((res, err) => {
                return err;
            });
        return content;
    };

    static putRotas = async (object, config) => {
        let content;
        await Axios.put(api + "/rotas", object, config)
            .then((res) => {
                const response = res.data;
                content = response;
            })
            .catch((res, err) => {
                return err;
            });
        return content;
    };

    static deleteRotas = async (object, config) => {
        let content;
        await Axios.delete(api + "/rotas/" + object.id, config)
            .then((res) => {
                const response = res.data;
                content = response;
            })
            .catch((res, err) => {
                return err;
            });
        return content;
    };
}

export default Requests;
