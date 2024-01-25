import * as types from "../constants";

export function setUserLoginInfo(userName, email, fullName, role, status) {
  return {
    type: types.USER_LOGIN_INFO,
    payload: {
      "userName": userName,
      "email": email,
      "fullName": fullName,
      "role": role,
      "status": status
    }
  };
}

export function setTokenInfo(token) {
  return {
    type: types.TOKEN_INFO,
    payload: token
  };
}