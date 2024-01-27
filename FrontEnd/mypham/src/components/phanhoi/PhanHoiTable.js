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
import { showSuccessNotification } from "../../helpers/helps";

export default function PhanHoiTable({data, setBaiViets}) {
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

  const getAllGroup = async () => {
    try {
      const result = await SanPhamApi.getAllDanhMuc();
      const { content: data, totalElements } = result;
      setBaiViets({ data, totalElements });
      console.log('getData');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
              <th className="d-none d-xl-table-cell">ID</th>
              <th className="d-none d-xl-table-cell">Nội dung</th>
              <th className="d-none d-xl-table-cell">Đánh giá</th>
            </tr>
          </thead>
          <tbody>
            {data.map((sanPham, index) => (
              <tr key={index}>
                <td>{sanPham.idPhanHoi}</td>
                <td className="d-none d-xl-table-cell">{sanPham.noiDung}</td>
                <td className="d-none d-xl-table-cell">{sanPham.danhGia}</td>
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
        {/* <ConfirmationModal
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
        )} */}
      </CardHeader>
    </Card>
  );
};