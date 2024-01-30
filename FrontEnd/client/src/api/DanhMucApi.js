import Api from './Api';

const url = "/danhMucs";

const getAllDanhMuc = () => {
  return  Api.get(`${url}`);
}


const create = (data) => {
  try {
    delete data?.idDanhMuc;
    data.anhDanhMuc ="2.png";
    return Api.post(url, data);
  } catch(e) {
    return null;
  }
};

const getById = (id) => {
  return Api.get(`${url}/${id}`);
};

const deleteById = (id) => {
  return Api.delete(`${url}/${id}`);
};

const update = (id, data) => {
  try {
    delete data?.idDanhMuc;
    delete data?.ngayViet;
    data.anhDanhMuc ="2.png";
    console.log('update', data)
    return Api.put(`${url}/${id}`, data);
  } catch (error) {
    return null;
  }
};

// export
const api = { update, getById, getById, create, getAllDanhMuc, deleteById }
export default api;