import React, { useEffect, useState } from "react";
import SanPhamApi from '../../api/SanPhamApi';
import BaiVietTable from "../../components/baiviet/BaiVietTable";
import SanPhamTable from "../../components/sanpham/SanPhamTable";
const size = 20
function SanPhamPage() {
  const [products, setProducts] = useState({
    data: [],
    totalElements: 0,
  })

  useEffect(() => {
    const getAllGroup = async () => {
      const result = await SanPhamApi.getAllSanPham();
      const data = result.content;
      const totalElements = result.totalElements;
      setProducts({data, totalElements})
    }

    getAllGroup();
  }, [size]);
  console.log("DEBUG::  ", products)
  return (
    <div>
      <SanPhamTable {...{data: products.data, setProducts}} />
    </div>
  )
}

export default SanPhamPage;