import React, { useEffect, useState } from "react";
import OrderApi from '../../api/OrderApi';
import OrderTable from "../../components/order";
const size = 20
function OrderPage() {
  const [order, setOrder] = useState([])

  useEffect(() => {
    const getAllGroup = async () => {
      const result = await OrderApi.getAllDonHang(1, size);
      const data = result;
      console.log(data)
      setOrder(data)
    }

    getAllGroup();
  }, [size]);
  console.log("DEBUG::  ", order)
  return (
    <div>
      <OrderTable {...{data: order, setOrder}} />
    </div>
  )
}

export default OrderPage