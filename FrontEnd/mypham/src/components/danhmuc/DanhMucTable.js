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
import DanhMucApi from "../../api/DanhMucApi";
import { MoreHorizontal } from "react-feather";
import ConfirmationModal from "../ConfirmDelete";
import EditFormModal from "./EditFormModal";
import { showSuccessNotification } from "../../helpers/helps";

const DanhMucTable = ({ data, setBaiViets }) => {
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
      const result = await DanhMucApi.getAllDanhMuc();
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
      if (!data?.idDanhMuc) {
        await DanhMucApi.create(data);
        showSuccessNotification("Tạo thành công");
      } else {
        await DanhMucApi.update(data?.idDanhMuc, data);
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
      await DanhMucApi.deleteById(deleteId);
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
              <th>Mã danh mục</th>
              <th className="d-none d-xl-table-cell">Tên danh mục</th>
              <th className="d-none d-xl-table-cell">Thứ tự</th>
              <th className="d-none d-xl-table-cell">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {data.map((baiviet, index) => (
              <tr key={index}>
                <td className="d-none d-xl-table-cell">{baiviet?.idDanhMuc}</td>
                <td className="d-none d-xl-table-cell">{baiviet?.tenDanhMuc}</td>
                <td className="d-none d-md-table-cell">{baiviet?.thuTu}</td>
                <div className="d-flex gx-2 align-items-center">
                  <Button color="info" onClick={() => handleEdit(baiviet)}>
                    Sửa
                  </Button>
                  <Button color="danger" onClick={() => toggleDelete(baiviet?.idDanhMuc)}>
                    Delete
                  </Button>
                </div>
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

export default DanhMucTable;
