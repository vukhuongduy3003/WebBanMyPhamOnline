import React, { useEffect, useState } from 'react';
import './Login.css'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal } from 'antd';
import UserApi from '../../api/UserApi'
import LoginApi from '../../api/LoginApi'
import {login} from '../../actions/UserAction'
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom'
import storage from '../../Storage/Storage';

function Login(props) {
  const dispatch = useDispatch();
  const [isOpenModal, setOpenModal] = useState(false);

  const [email, setEmail] = useState("");

  const [isDisableResendButton, setDisableResendButton] = useState(false);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const resendEmailToActiveAccount = async () => {
    setDisableResendButton(true);
    await UserApi.resendEmailToActiveAccount(email);
    setDisableResendButton(false);
  }
  const toggle = () => setOpenModal(prev => !prev)
  const user = useSelector((state) => state.userSignin);
  const { userInfo, error } = user;

  const onSubmit = async (data) => {
    try {
      // call api
      const result = await LoginApi.login(
        data.username,
        data.password
      );
      if (!result.token) {
        setEmail(result.email);
        setOpenModal(true);

      } else {
        // save token & UserInfo to storage
        storage.setToken(result.token);
        storage.setUserInfo(
          result.userName,
          result.email,
          result.fullName,
          result.role,
          result.status);

        // save token & UserInfo to redux
        console.log("result_Login: ", result)
        // setTokenInfo(result.token);
        // setUserLoginInfo(
        //   result.userName,
        //   result.email,
        //   result.fullName,
        //   result.role,
        //   result.status)

        // redirect to home page
        dispatch(login(result));
        history.push("/");
      }

    } catch (error) {
      if (error.status === 401) {
        // show error notification
        // showErrorNotification("Login Fail!", "Wrong Username or Password!")
      } else {
        // redirect page error server
        history.push("/auth/500");
      }
    }
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  });

  return (
    <div class="login-page">
      <h2> ĐĂNG NHẬP </h2>
      <form onSubmit={handleSubmit(onSubmit)} class="form-login">
        <input {...register("username")} placeholder="username" required></input>
        <input
          {...register("password")}
          placeholder="Password"
          type="password"
          required
        ></input>

        <input type="submit" value="Đăng Nhập"></input>
        {error ? <h2>{error}</h2> : <></>}
        <Link to="/register">Tạo tài khoản?</Link>
      </form>
      <Modal open={isOpenModal} title="You need to active your account"
       okButtonProps={{ disabled: isDisableResendButton }} 
       onCancel={toggle}
       onOk={resendEmailToActiveAccount}>

        {/* body */}
        <div className="m-3">
          <p className="mb-0">
            Your account is not active.
          </p>
          <p className="mb-0">
            Please check your email (<b>{email}</b>) to active account.
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Login;