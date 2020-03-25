import * as axios from "axios";

const baseURL = `https://social-network.samuraijs.com/api/1.0/`;

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "ff14243d-4b04-4912-9a2f-b8149684c9af"
    }
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        }); //возвращаем из ответв только дату, а не весь ответ
};

