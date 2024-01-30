import Api from './Api';

const url = "/thanhToan";

const createPayment = (data) => {
    return Api.post(`${url}`, data);
};
const VNPayPayment = (data) => {
    return Api.get(`/payment/pay`, {params: {price: data}});
};
// export
const api = { createPayment,VNPayPayment }
export default api;