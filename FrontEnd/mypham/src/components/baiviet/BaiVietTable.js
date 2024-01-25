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

import BaiVietApi from '../../api/BaiVietApi'
import { MoreHorizontal } from "react-feather";
import ConfirmationModal from "../ConfirmDelete";
import EditFormModal from './EditFormModal'
import { showSuccessNotification } from "../../helpers/helps";
const BaiVietTable = ({data, setBaiViets}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState(null); // Initial empty data, replace with actual data as needed

  const toggleEditModel = () => {
    setEditModalOpen(!isEditModalOpen);
  }
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  const handleEdit = (baiviet) => {
    // Set the initial values for the edit form
    setEditFormData(baiviet ?? {});
    // Open the edit modal
    toggleEditModel();
  };
  const getAllGroup = async () => {
    const result = await BaiVietApi.getAllBaiViet();
    const data = result.content;
    const totalElements = result.totalElements;
    setBaiViets({data, totalElements})
  }
  const handleSave = async (data) => {
    console.log("Submit data", data)
    if(!data?.idBaiViet) {
      await BaiVietApi.create(data);
      showSuccessNotification('Tạo thành công')
    } else {
      await BaiVietApi.update(data?.idBaiViet, data)
      showSuccessNotification('Sửa thành công')
    }
    getAllGroup()
  }

  const handleDelete = async (id) => {
    // Implement your delete logic here
    await BaiVietApi.deleteById(id)
    showSuccessNotification('Xoá thành công')
    // Close the modal after deletion
    toggleModal();
  };
  const renderData = () => {
    if (Array.isArray(data) && data.length > 0) {
      return <Table striped className="my-0">
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th className="d-none d-xl-table-cell">Tóm tắt</th>
            <th className="d-none d-xl-table-cell">Nội dung</th>
            <th className="d-none d-md-table-cell">Ngày viết</th>
            <th className="d-flex">Ngày viết</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((baiviet, index) => (
              <tr key={index}>
                <td>{baiviet?.tieuDe}</td>
                <td className="d-none d-xl-table-cell">{baiviet?.tomTat}</td>
                <td className="d-none d-xl-table-cell">{baiviet?.noiDung}</td>
                <td className="d-none d-md-table-cell">{baiviet?.ngayViet}</td>
                <div class="d-flex gx-2 align-items-center">
                <Button color="info" onClick={() => handleEdit(baiviet)}>
                    Sửa
                </Button>
                <Button color="danger" onClick={() => toggleModal(baiviet.idBaiViet)}>
                  Delete
                </Button>
              </div>
              </tr>
            ))
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
      <ConfirmationModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        onConfirm={handleDelete}
        message="Are you sure you want to delete?"
      />
      {isEditModalOpen && <EditFormModal
        isOpen={isEditModalOpen}
        toggle={toggleEditModel}
        onSave={handleSave}
        initialValues={editFormData}
      />}
       
    </CardHeader>
    
  </Card>
};

export default BaiVietTable;