export function header($auth = true) {
    if ($auth) {
        // return authorization header with jwt token
        let token = JSON.parse(localStorage.getItem("token"));

        if (token) {
            return {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            };
        } else {
            return {};
        }
    } else {
        return { "Content-Type": "application/json" };
    }
}
