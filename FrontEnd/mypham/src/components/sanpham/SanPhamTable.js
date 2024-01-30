import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  DropdownToggle,
  UncontrolledDropdown,
  Table,
  Button,
} from "reactstrap";
import SanPhamApi from "../../api/SanPhamApi";
import { MoreHorizontal } from "react-feather";
import ConfirmationModal from "../ConfirmDelete";
import EditFormModal from "./EditFormModal";
import { showSuccessNotification } from "../../helpers/helps";

const SanPhamTable = ({ data, getAllGroup }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState(null);

  const toggleEditModel = () => setEditModalOpen((prev) => !prev);
  const toggleModal = () => setModalOpen((prev) => !prev);

  const handleEdit = (baiviet) => {
    setEditFormData(baiviet ?? {});
    toggleEditModel();
  };

  const handleSave = async (data) => {
    try {
      console.log("Submit data", data);
      if (!data?.idSanPham) {
        await SanPhamApi.create(data);
        showSuccessNotification("Tạo thành công");
      } else {
        await SanPhamApi.update(data?.idSanPham, data);
        showSuccessNotification("Sửa thành công");
      }
      await getAllGroup();
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handleDelete = async () => {
    try {
      if (deleteId == null) return;
      await SanPhamApi.deleteById(deleteId);
      toggleModal();
      setDeleteId(null);
      showSuccessNotification("Xóa thành công");
      await getAllGroup();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const toggleDelete = (id) => {
    toggleModal();
    setDeleteId(id);
  };

  const renderData = () => {
    if (Array.isArray(data) && data.length > 0) {
      return (
        <Table striped className="my-0">
          <thead>
            <tr>
              <th>Mã danh mục</th>
              <th className="d-none d-xl-table-cell">Tên sản phẩm</th>
              <th className="d-none d-xl-table-cell">Số lượng</th>
              <th className="d-none d-xl-table-cell">Giá sản phẩm</th>
              <th className="d-none d-md-table-cell">Giá sale</th>
              <th className="d-none d-md-table-cell">Hình ảnh</th>
              <th className="d-none d-md-table-cell">Ngày sản xuất</th>
              <th className="d-none d-md-table-cell">Ngày hết hạn</th>
              <th className="d-none d-md-table-cell">Mô tả</th>
              <th className="d-none d-md-table-cell">Tình trạng</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((sanPham, index) => (
              <tr key={index}>
                <td>{sanPham.idSanPham}</td>
                <td className="d-none d-xl-table-cell">{sanPham.tenSanPham}</td>
                <td className="d-none d-xl-table-cell">{sanPham.soLuong}</td>
                <td className="d-none d-xl-table-cell">{sanPham.giaSanPham}</td>
                <td className="d-none d-md-table-cell">{sanPham.giaSale}</td>
                <td className="d-none d-md-table-cell">{sanPham.hinhAnh}</td>
                <td className="d-none d-md-table-cell">{sanPham.ngaySanXuat}</td>
                <td className="d-none d-md-table-cell">{sanPham.ngayHetHan}</td>
                <td className="d-none d-md-table-cell">{sanPham.moTa}</td>
                <td className="d-none d-md-table-cell">{sanPham.tinhTrang}</td>
                <td>
                  <div className="d-flex gx-2 align-items-center">
                    <Button color="info" onClick={() => handleEdit(sanPham)}>
                      Sửa
                    </Button>
                    <Button color="danger" onClick={() => toggleDelete(sanPham.idSanPham)}>
                      Xóa
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
    }
    return <span>Không có dữ liệu</span>;
  };

  return (
    <Card className="flex-fill w-100">
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
        <ConfirmationModal
          isOpen={isModalOpen}
          toggle={toggleModal}
          onConfirm={handleDelete}
          message="Are you sure you want to delete?"
        />
        {isEditModalOpen && (
          <EditFormModal
            isOpen={isEditModalOpen}
            toggle={toggleEditModel}
            onSave={handleSave}
            initialValues={editFormData}
          />
        )}
      </CardHeader>
    </Card>
  );
};

export default SanPhamTable;
