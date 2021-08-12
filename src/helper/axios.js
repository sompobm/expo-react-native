import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const port = 9090;
const ip = "192.168.1.42";

const URL = `http://${ip}:${port}`;

let headerRequest = {
    headers: {
        "Content-Type": "application/json",
    },
};

async function setHeaderRequest(header) {
    const token = await AsyncStorage.getItem("@token");
    headerRequest.headers.Authorization = `Bearer ${token}`;
    headerRequest.headers = { ...headerRequest.headers, ...header };
}

export default {
    post: async function (path = "", body = {}, headers = {}) {
        try {
            await setHeaderRequest(headers);
            return await axios.post(URL + path, body, headerRequest).catch((error) => {
                if (error.response) {
                    throw {
                        status: error.response.status,
                        msg: `Request failed : ${JSON.stringify(error.response.data)}`,
                    };
                }
            });
        } catch (error) {
            return {
                status: error.status,
                error: error.msg,
            };
        }
    },
    get: async function (path = "", headers = {}) {
        try {
            await setHeaderRequest(headers);
            return await axios.get(URL + path, headerRequest).catch((error) => {
                if (error.response) {
                    throw {
                        status: error.response.status,
                        msg: `Request failed : ${JSON.stringify(error.response.data)}`,
                    };
                }
            });
        } catch (error) {
            return {
                status: error.status,
                error: error.msg,
            };
        }
    },
    put: async function (path = "", body = {}, headers = {}) {
        try {
            await setHeaderRequest(headers);
            return await axios.put(URL + path, body, headerRequest).catch((error) => {
                if (error.response) {
                    throw {
                        status: error.response.status,
                        msg: `Request failed : ${JSON.stringify(error.response.data)}`,
                    };
                }
            });
        } catch (error) {
            return {
                status: error.status,
                error: error.msg,
            };
        }
    },

    delete: async function (path = "", data = {}, headers = {}) {
        try {
            await setHeaderRequest(headers);
            return await axios.delete(URL + path, { headers: headerRequest.headers, data }).catch((error) => {
                if (error.response) {
                    throw {
                        status: error.response.status,
                        msg: `Request failed : ${JSON.stringify(error.response.data)}`,
                    };
                }
            });
        } catch (error) {
            return {
                status: error.status,
                error: error.msg,
            };
        }
    },
};
