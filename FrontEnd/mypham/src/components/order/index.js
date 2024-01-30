import React, { useState } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  DropdownToggle,
  UncontrolledDropdown,
  Table,
  Button
} from "reactstrap";

import { MoreHorizontal } from "react-feather";
import ProductTable from "./TableSanPham";
const BaiVietTable = ({data, setBaiViets}) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState(null); // Initial empty data, replace with actual data as needed

  const toggleEditModel = () => {
    setEditModalOpen(!isEditModalOpen);
  }
  const handleEdit = (baiviet) => {
    // Set the initial values for the edit form
    setEditFormData(baiviet?.chiTietDTOList ?? {});
    // Open the edit modal
    toggleEditModel();
  };

  const renderData = () => {
    if (Array.isArray(data) && data.length > 0) {
      return <Table striped className="my-0">
        <thead>
          <tr>
            <th>ID Đơn Hàng</th>
            <th className="d-none d-xl-table-cell">ID Người dùng</th>
            <th className="d-none d-md-table-cell">Tổng số tiền</th>
            <th className="d-none d-md-table-cell">Ngày Thanh Toán</th>
            <th className="d-flex">Thanh Toán Bằng</th>
            <th className="">actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((donHang, index) => {
              console.log(donHang)
              return (
                <tr key={index}>
                  <td>{donHang?.idHoaDon}</td>
                  <td className="d-none d-xl-table-cell">{donHang?.id}</td>
                  <td className="d-none d-xl-table-cell">{donHang?.soTienThanhToan}</td>
                  <td className="d-none d-md-table-cell">{donHang?.ngayThanhToan}</td>
                  <td className="d-none d-md-table-cell">{donHang?.trangThaiThanhToan ? "VNPAY" : "Thanh toán khi nhận hàng"}</td>
                  <div class="d-flex gx-2 align-items-center">
                  <Button color="info" onClick={() => handleEdit(donHang)}>
                      Xem Chi Tiết
                  </Button>
                </div>
                </tr>
              )
            })
          }
          
        </tbody>
      </Table>
    }
    return <span>
      Không có dữ liệu
    </span>
  }
  return <Card className="flex-fill w-100">
    <CardHeader>
      <div className="card-actions float-right">
        <UncontrolledDropdown>
          <DropdownToggle tag="a">
            <MoreHorizontal />
          </DropdownToggle>
          <Button color="primary" onClick={() => handleEdit()}>
            Tạo mới
          </Button>
        </UncontrolledDropdown>
      </div>
      <CardTitle tag="h5" className="mb-0">
        Latest Projects
      </CardTitle>
      {renderData()}
      {isEditModalOpen && <ProductTable {...{isOpen: isEditModalOpen, toggle: toggleEditModel, chiTietDTOList: editFormData}}/>}
       
    </CardHeader>
    
  </Card>
};

export default BaiVietTable;