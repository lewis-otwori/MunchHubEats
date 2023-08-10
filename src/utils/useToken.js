import { useState } from "react";

const useToken = () => {

    const getToken = () => {
        const userToken = localStorage.getItem('token');
        return userToken && userToken
    }

    const [token, setToken] = useState(getToken());

    const saveToken = (useToken) => {
        localStorage.setItem('token', useToken);
        setToken(useToken);
    }

    const removeToken = () => {
        localStorage.removeItem('token');
        setToken(null);
    }
    return {
        setToken: saveToken,
        token,
        removeToken
    }
}

export default useToken;