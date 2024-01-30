import Api from './Api';

const url = "/BinhLuans/SanPhams";

const getAllBinhLuan = (idSanPham) => {
  return  Api.get(`${url}/${idSanPham}`);
}


const create = (idSanPham, userId, data) => {
  return Api.post(`${url}/${idSanPham}/Users/${userId}`, data);
};

const getById = (id) => {
  return Api.get(`${url}/${id}`);
};
const deleteById = (id) => {
  return Api.delete(`${url}/${id}`);
};

const update = (id, data) => {
  return Api.put(`${url}/${id}`, data);
};

// export
const api = { update, getById, getById, create, getAllBinhLuan, deleteById }
export default api;