import Api from './Api';
import FormData from 'form-data';

const url = "/thanhToan";

const createPayment = (data) => {
    return Api.post(`${url}`, data);
};

// export
const api = { createPayment }
export default api;