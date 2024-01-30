import React from 'react';
import { Table, Modal, ModalBody, ModalHeader } from 'reactstrap';

const ProductTable = ({isOpen, toggle, chiTietDTOList}) => {
  // Tính tổng số tiền
  const totalAmount = chiTietDTOList.reduce((total, item) => total + item.soLuongMua * item.donGia, 0);

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
    <ModalHeader toggle={toggle}>Edit Form</ModalHeader>
    <ModalBody>
      <div>
        {/* Bảng hiển thị thông tin sản phẩm */}
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên Sản Phẩm</th>
              <th>Số Lượng Mua</th>
              <th>Đơn Giá</th>
            </tr>
          </thead>
          <tbody>
            {chiTietDTOList.map(item => (
              <tr key={item.idSanPham}>
                <td>{item.idSanPham}</td>
                <td>{item.tenSP}</td>
                <td>{item.soLuongMua}</td>
                <td>{item.donGia}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Hiển thị tổng số tiền */}
        <div>
          <strong>Tổng số tiền: {totalAmount}</strong>
        </div>
      </div>
    </ModalBody>
    </Modal>
  );
}

export default ProductTable;
