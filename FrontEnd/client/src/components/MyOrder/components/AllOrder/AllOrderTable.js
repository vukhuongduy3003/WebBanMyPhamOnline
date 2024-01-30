import React from 'react';
import { Table } from 'antd';

const ProductTable = ({data}) => {

  // Tính tổng số tiền
  const totalAmount = data?.chiTietDTOList.reduce((total, item) => total + item.soLuongMua * item.donGia, 0);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'idSanPham',
      key: 'idSanPham',
    },
    {
      title: 'Tên Sản Phẩm',
      dataIndex: 'tenSP',
      key: 'tenSP',
    },
    {
      title: 'Số Lượng Mua',
      dataIndex: 'soLuongMua',
      key: 'soLuongMua',
    },
    {
      title: 'Đơn Giá',
      dataIndex: 'donGia',
      key: 'donGia',
    },
  ];

  return (
    <div>
      {/* Bảng hiển thị thông tin sản phẩm */}
      <Table dataSource={data?.chiTietDTOList} pagination={false} columns={columns} />

      {/* Hiển thị tổng số tiền */}
      <div>
      <td className="d-none d-md-table-cell">{"Thanh Toán Bằng :  "}<strong>{data?.trangThaiThanhToan ? "VNPAY" : "Thanh toán khi nhận hàng"}</strong></td>
        <strong>Tổng số tiền: {totalAmount}</strong>
      </div>
    </div>
  );
}

export default ProductTable;
