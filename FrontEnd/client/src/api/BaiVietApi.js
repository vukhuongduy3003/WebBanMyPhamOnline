import Api from './Api';

const url = "/baiViets";

const getAllBaiViet = () => {
  return  Api.get(`${url}`);
}


const create = (data) => {
  
  delete data?.idBaiViet;
  delete data?.ngayViet;
  data.anhBaiViet ="2.png";
  return Api.post(url, data);
};

const getById = (id) => {
  return Api.get(`${url}/${id}`);
};
const deleteById = (id) => {
  return Api.delete(`${url}/${id}`);
};

const update = (id, data) => {

  delete data?.idBaiViet;
  delete data?.ngayViet;
  data.anhBaiViet ="2.png";
  console.log('update', data)
  return Api.put(`${url}/${id}`, data);
};

// export
const api = { update, getById, getById, create, getAllBaiViet, deleteById }
export default api;