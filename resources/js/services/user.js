import { header } from "../helpers";

export const userService = {
    login,
    logout,
};

function login(email, password) {
    const data = { email, password };
    const headers = header(false);

    return axios
        .post(`/api/login`, data, { headers: headers })
        .then((data) => {
            if (data.data.token) {
                localStorage.setItem("token", JSON.stringify(data.data.token));
            }
            return data;
        })
        .catch(handleResponse);
}

function logout() {
    const headers = header(true);
    axios.post(`/api/logout`, {}, { headers: headers }).then();
    localStorage.removeItem("token");
}

function handleResponse(err) {
    if (err.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
    }

    return Promise.reject(err);
}
