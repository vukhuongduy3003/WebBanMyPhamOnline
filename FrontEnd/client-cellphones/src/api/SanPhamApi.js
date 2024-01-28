import Api from './Api';
import * as moment from 'moment'
const url = "/sanPhams";
const formatDate = (currentDate) => {
  // Assuming you have a Date object
// Format the date to "dd-MM-yyyy"
const dateString = currentDate;
const dateObject = new Date(dateString);
const parsedDate = moment(dateString).format('DD-MM-yyyy');


return parsedDate; // Output: "27-01-2024"

}
 const getAllSanPham = () => {
  return  Api.get(`${url}`);
}


const create = (data) => {
  try {
    data.ngaySanXuat = formatDate(data.ngaySanXuat)
    data.ngayHetHan= formatDate(data.ngayHetHan)
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
    console.log('update', data)
    data.ngaySanXuat = formatDate(data.ngaySanXuat)
    data.ngayHetHan= formatDate(data.ngayHetHan)
    return Api.put(`${url}/${id}`, data);
  } catch (error) {
    return null;
  }
};

// export
const api = { update, getById, getById, create, getAllSanPham, deleteById }
export default api;