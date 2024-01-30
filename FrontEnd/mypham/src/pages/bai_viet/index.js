import React, { useEffect, useState } from "react";
import BaiVietApi from '../../api/BaiVietApi';
import BaiVietTable from "../../components/baiviet/BaiVietTable";
const size = 20
function BaiVietPage() {
  const [baiViets, setBaiViets] = useState({
    data: [],
    totalElements: 0,
  })

  useEffect(() => {
    const getAllGroup = async () => {
      const result = await BaiVietApi.getAllBaiViet(1, size);
      const data = result.content;
      const totalElements = result.totalElements;
      setBaiViets({data, totalElements})
    }

    getAllGroup();
  }, [size]);
  console.log("DEBUG::  ", baiViets)
  return (
    <div>
      <BaiVietTable {...{data: baiViets.data, setBaiViets}} />
    </div>
  )
}

export default BaiVietPage