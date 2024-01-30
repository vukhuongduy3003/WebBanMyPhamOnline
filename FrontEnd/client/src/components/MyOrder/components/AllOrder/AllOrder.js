import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByUser } from "../../../../actions/OrderAction";
import {formatPrice} from '../../../../untils/index'
import "./AllOrder.css";
import ProductTable from "./AllOrderTable";

const orderItem = (item) => (
  <div className="all-myorder-item">
    <div className="all-myorder-item-img">
      <img src={item.image}></img>
    </div>
    <div className="all-myorder-item-name">
      <p>{item.name}</p>
      <span>x{item.qty}</span>
    </div>
    <div className="all-myorder-item-price">{formatPrice(item.salePrice)}</div>
  </div>
);

export const orderParent = (item) => (
  <div className="all-myorder-parent-item">
    <div className="all-myorder-list">
      {item.chiTietDTOList.map((item) => orderItem(item))}
    </div>
    <div className="all-myorder-item-totalprice">
      <div>
        <span>Tổng số tiền : </span> <strong>{formatPrice(item.totalPrice)}đ</strong>
      </div>
    </div>
  </div>
);

function AllOrder(props) {
  const dispatch = useDispatch();
  const { myOrders } = useSelector((state) => state.orderByUser);
  console.log(myOrders)
  useEffect(() => {
    dispatch(getOrderByUser());
  }, []);

  return (
    <div className="all-myorder">
      
      {myOrders && myOrders?.length > 0 ? myOrders?.map((item, i) => <div>
        <h4>Đơn Hàng Thứ {i + 1}</h4>
        <ProductTable data={item}/>
        </div>) : "Bạn không có đơn hàng nào"}
    </div>
  );
}

export default AllOrder;
