import { create } from "axios"
import Cookies from "js-cookie"


const api = create({
    baseURL: "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Cookies.get("jwt_token")}`
    }
})


const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers["Authorization"] = `Bearer ${token}`
    } else {
        delete api.defaults.headers["Authorization"]
    }
}

const removeAuthToken = () => {
    delete api.defaults.headers["Authorization"]
}

export { setAuthToken, removeAuthToken }
export default api


