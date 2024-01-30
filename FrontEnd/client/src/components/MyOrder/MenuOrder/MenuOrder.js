import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrderPenddingByUser,
  getOrderShippingByUser,
} from "../../../actions/OrderAction";

function MenuOrder(props) {
  const dispatch = useDispatch()
  const location = useLocation()

  const { userInfo } = useSelector((state) => state.userSignin);

  return (
    <div className="myorder-menu">
      <div className={location.pathname === '/myOrder' ? 'myorder-menu-item active' : 'myorder-menu-item'}>
        <Link to={'/myOrder' }>Tất cả</Link>
      </div>
    </div>
  );
}

export default MenuOrder;
