import React, { useState, useEffect } from 'react';
import { Col, notification} from 'antd';
import {useDispatch, useSelector} from 'react-redux'
import { commentProduct, getproductById } from '../../actions/ProductAction';
import {useParams} from 'react-router-dom'
import BinhLuanApi from '../../api/BinhLuanApi';
import AllComment from './AllComment';

function CommentProduct(props) {
  const {id} = useParams()
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [isSub, setIsSubmit] = useState(false)
  const [allComments, setComments] = useState([])
  const {userInfo} = useSelector(state => state.userSignin)
  
  const Comment = async () => {
    if(userInfo){
      const comment = {
        noiDung: value,
      }
      try {
        await (BinhLuanApi.create(id,userInfo.id, comment))
        setValue('')
        setIsSubmit(prev => !prev)
      } catch(e) {
        notification.error({message: "Có lỗi"})
      }
    }
    else alert('Đăng nhập đi bạn êiiiii')
  }
  useEffect(() => {
    const GetData =async () => {
      const data = await BinhLuanApi.getAllBinhLuan(id);
      setComments(data);
    }
    GetData()
  }, [isSub])

    return (
      <div className='comment'>
        <Col span={18} align='start' style={{ alignItems:'center'}} xs={24} sm={24} md={18}>
          <div className="comment-area" style={{display: 'flex', alignItems:'center'}}>
            <textarea placeholder='Xin mời để lại câu hỏi, Mĩ Phẩm Đông Á sẽ trả lời trong 1h từ 8h - 22h mỗi ngày.' rows={10} cols={3} value={value} onChange={(e) => setValue(e.target.value)}></textarea>
          </div>
          <div className="comment-send">
            <button onClick={() => Comment()}>Gửi</button>
          </div>
        </Col>

        <AllComment allComment={allComments} />
      </div>

    )
}

export default CommentProduct;