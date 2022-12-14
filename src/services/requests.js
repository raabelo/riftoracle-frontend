import Axios from "axios";
import api from "../environment/backend";
const web = api + "portal";
const app = api + "app";

// const mobile = api + "app";

class Requests {
    static login = async (object) => {
        let content;
        await Axios.get(web + "/login", object)
            .then((res) => {
                const response = res.data;
                content = response;
            })
            .catch((res, err) => {
                return err;
            });
        return content;
    };

    static putNovaSenha = async (object, config) => {
        let content;
        await Axios.put(app + "/alterarSenha", object, config)
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
        await Axios.get(app + "/requerirSenha", object)
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
        await Axios.get(web + "/usuarios/Tecnico", config)
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
        await Axios.post(web + "/usuarios/Tecnico", object, config)
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
        await Axios.put(web + "/usuarios/Tecnico", object, config)
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
        await Axios.delete(web + "/usuarios/" + object.id, config)
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
        await Axios.get(web + "/rotas", config)
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
        await Axios.post(web + "/rotas", object, config)
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
        await Axios.put(web + "/rotas", object, config)
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
        await Axios.delete(web + "/rotas/" + object.id, config)
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
