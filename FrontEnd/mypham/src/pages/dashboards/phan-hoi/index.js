import React, { useEffect, useState } from "react";
import PhanHoiApi from '../../../api/PhanHoi';
import PhanHoiTable from "../../../components/phanhoi/PhanHoiTable";
const size = 20
function PhanHoiDashboard() {
  const [products, setBaiViets] = useState({
    data: [],
    totalElements: 0,
  })

  useEffect(() => {
    const getAllGroup = async () => {
      const result = await PhanHoiApi.getAllSanPham();
      const data = result.content;
      const totalElements = result.totalElements;
      setBaiViets({data, totalElements})
    }

    getAllGroup();
  }, [size]);
  console.log("DEBUG::  ", products)
  return (
    <div>
      <PhanHoiTable {...{data: products.data, setBaiViets}} />
    </div>
  )
}

export default PhanHoiDashboard;