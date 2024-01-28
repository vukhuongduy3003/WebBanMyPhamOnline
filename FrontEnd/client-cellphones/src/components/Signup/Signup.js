import React, { useState } from 'react';
import './Signup.css'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import UserApi from '../../api/UserApi';
import { useHistory } from 'react-router';
import {SignupUser} from '../../actions/UserAction'
import { notification } from 'antd';

function Login(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isOpenModal, setOpenModal] = useState(false);
    const openNotification = (title = 'Notification Title', res) => {
      const args = {
        message: title,
        description: res,
        duration: 0,
      };
      notification.success(args);
    };
    const [email, setEmail] = useState("");
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = async data => {
      console.log(data)
      try {
        if(data.repeatPassword === data.password) {
          delete data?.['repeatPassword']
          let res = await UserApi.create(
            data.userName,
            data.email,
            data.password,
            {sdt: data.sdt,fullName: data.fullName, diaChi: data.diaChi}            
          );
          openNotification('test', res + '  ' + data.email)
          // message
          setEmail(data.email);
          setOpenModal(true);
          setTimeout(() => {
            history.push('/')
          }, 3000);
        } else{
            alert("wrong repeat password")
        }

      } catch (error) {
        // redirect page error server
        alert("Tên hoặc email bị trùng")
      }
    }
  
    return (
      <div className="signup-page">
        <h2>ĐĂNG KÍ</h2>
        <form onSubmit={handleSubmit(onSubmit)} classname="form-signup">
          {/* <input {...register("name")} placeholder="Name" required></input> */}
          <input
            {...register("email")}
            placeholder="Email"
            type="email"
            required
          ></input>
          <input
            {...register("password")}
            placeholder="Password"
            type="password"
            // onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <input
            {...register("repeatPassword")}
            placeholder=" Repeat password"
            type="password"
            // onChange={(e) => setConfirmPassword(e.target.value)}
            required
          ></input>
          <input
            {...register("sdt")}
            placeholder="Số điện thoại"
            type="text"
            required
          />
          <input
            {...register("userName")}
            placeholder=" Username người dùng"
            type="text"
            required
          />
          <input
            {...register("fullName")}
            placeholder=" Tên người dùng"
            type="text"
            required
          />
          <input
            {...register("diaChi")}
            placeholder="Địa chỉ"
            required
          />
          <input type="submit" value="Đăng Kí"></input>
        </form>
      </div>
    );
}

export default Login;