import Api from './Api';

const url = "/donHangs";

const getAllDonHang = () => {
  return  Api.get(`${url}`);
}


const create = (data) => {
  try {
    delete data?.idDonHang;
    data.anhDonHang ="2.png";
    return Api.post(url, data);
  } catch(e) {
    return null;
  }
};

const getById = (id) => {
  return Api.get(`${url}/users/${id}`);
};

const deleteById = (id) => {
  return Api.delete(`${url}/${id}`);
};

const update = (id, data) => {
  try {
    delete data?.idDonHang;
    delete data?.ngayViet;
    data.anhDonHang ="2.png";
    console.log('update', data)
    return Api.put(`${url}/${id}`, data);
  } catch (error) {
    return null;
  }
};

// export
const api = { update, getById, getById, create, getAllDonHang, deleteById }
export default api;