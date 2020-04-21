import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "ff14243d-4b04-4912-9a2f-b8149684c9af"
    }
});
export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            }); //возвращаем из ответа только дату, а не весь ответ
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
};
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/`+ userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`,{status: status});
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe});
        //вместе с запросом отправляем обьект данных, которые также должны придти из вне(props);
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};


