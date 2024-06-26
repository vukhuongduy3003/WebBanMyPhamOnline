import axios from 'axios'
import DanhMucApi from '../api/DanhMucApi';
export const getAllTypeProduct = () => async (dispatch) => {
    try {
        const data = await DanhMucApi.getAllDanhMuc()
        dispatch({type: 'GET_ALL_TYPE_PRODUCT', payload: data.content})
    } catch (error) {
    }
}

export const CreateNewTypeProduct = (type) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:4000/typeList/create`, type)
        dispatch({type: 'CREATE_NEW_TYPE_PRODUCT', payload: data})
    } catch (error) {
    }
}

export const deleteTypeProduct = (type) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`http://localhost:4000/typeList/delete/${type._id}`)
        dispatch({type: 'DELETE_TYPE_PRODUCT', payload: data})
    } catch (error) {
    }
}