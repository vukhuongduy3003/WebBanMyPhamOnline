import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { createOrder, payOrder } from "../../actions/OrderAction";
import { useHistory } from "react-router-dom";
import VnPay from "./VnPay";
import PaymentApi from "../../api/Payment"
import { notification } from "antd";

export default function Payment() {
  const history = useHistory();
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state => state.userSignin)
  const { order } = useSelector((state) => state.orderInfo);
  const [sdkReady, setSdkReady] = useState(false);
  const [choosePay, setChoosePay] = useState({
    payLater: false,
    payOnline: false,
  });



  const payLater = () => {
    setChoosePay({ payOnline: false, payLater: true });
  };

  const payOnline = () => {
    setChoosePay({ payLater: false, payOnline: true });
  };


  const total = order?.orderItems.reduce((accumulator, currentValue) => {
    const quantityToConsider = Math.min(currentValue.qty, currentValue.soLuong);
    const itemTotal = (currentValue.giaSanPham - currentValue.giaSale) * quantityToConsider;
  
    return accumulator + itemTotal;
  }, 0);
  const SendOrderPayLater = async (status = 0) => {
    if(!order?.orderItems){

      return null;
    }
    const products = order?.orderItems?.map((o, i) => ({
      idSanPham: o.idSanPham,
      soLuongMua: o.qty >= o.soLuong ? o.soLuong : o.qty
    }))
    
    const OrderPaid = {
      sanPhams: products,
      id: order.user.id,
      trangThaiThanhToan: status,
      soTienThanhToan: total
    };
    dispatch(createOrder(OrderPaid))
    try {
      setTimeout(() => {
        history.push("/orderSuccess");
      }, 4000);
    } catch (error) {   
      notification.error({message: "Thanh Toán Không thành công"})   
    }

  };

  return (
    <div className="choose-pay">
      <h4>CHỌN PHƯƠNG THỨC THANH TOÁN </h4>
      <div className="choose">
        <button
          type="submit"
          className={choosePay.payLater ? "active" : ""}
          onClick={() => payLater()}
        >
          Thanh toán khi nhận hàng
        </button>
        <button
          type="submit"
          className={choosePay.payOnline ? "active" : ""}
          onClick={() => payOnline()}
        >
          Thanh toán Online
        </button>
      </div>
      {choosePay.payLater ? (
        <div className="customer-order">
          <button onClick={() =>SendOrderPayLater(0)}>Đặt Hàng</button>
        </div>
      ) : (
        ""
      )}
      {choosePay.payOnline ? (
        <button type="submit" className="paypal">
          
          <VnPay SendOrderPayLater={SendOrderPayLater} total={total}/>
        </button>
      ) : (
        ""
      )}

    </div>
  );
}
