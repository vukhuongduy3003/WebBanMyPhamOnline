const setRememberMe = (isRememberMe) => {
    localStorage.setItem('isRememberMe', isRememberMe);
};

const getListCarts = () => {
    return JSON.parse(localStorage.getItem('cartItems'))
}

const isRememberMe = () => {

    if (localStorage.getItem('isRememberMe') === null || localStorage.getItem('isRememberMe') === undefined) {
        return true;
    }

    // convert string to boolean
    return JSON.parse(localStorage.getItem('isRememberMe'));
};

const setItem = (key, value) => {
    if (isRememberMe()) {
        localStorage.setItem(key, value);
    } else {
        sessionStorage.setItem(key, value);
    }
}

const getItem = (key) => {
    if (isRememberMe()) {
        return localStorage.getItem(key);
    } else {
        return sessionStorage.getItem(key);
    }
}

const setToken = (token) => {
    setItem('token', token);
};

const getToken = () => {
    return getItem('token');
};

const setUserInfo = (userName, email, fullName, role, status) => {
    setItem('userName', userName);
    setItem('email', email);
    setItem('fullName', fullName);
    setItem('role', role);
    setItem('status', status);
}

const getUserInfo = () => {
    return {
        'userName': getItem('userName'),
        'email': getItem('email'),
        'fullName': getItem('fullName'),
        'role': getItem('role'),
        'status': getItem('status')
    };
}

// export
const storage = { isRememberMe, setRememberMe, setToken, getToken, setUserInfo, getUserInfo,getListCarts }
export default storage;