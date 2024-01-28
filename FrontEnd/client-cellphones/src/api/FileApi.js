import Api from './Api';
import FormData from 'form-data';

const url = "/files";

const uploadImage = (imageFile) => {

    const body = new FormData();
    body.append('image', imageFile);

    return Api.post(`${url}/image`, body, {
        headers: {'Content-Type': 'multipart/form-data"'}
    });
};

// export
const api = { uploadImage }
export default api;