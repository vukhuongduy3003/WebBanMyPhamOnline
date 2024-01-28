// EditFormModal.js
import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import * as Yup from  'yup';
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import DanhMucApi from '../../api/DanhMucApi';
import FileApi from '../../api/FileApi';
import { showSuccessNotification } from '../../helpers/helps';

const ProductSchema = Yup.object().shape({
  tenSanPham: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    soLuong: Yup.number()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    giaSanPham: Yup.number().required('Required'),
});

const EditFormModal = ({ isOpen, toggle, onSave, initialValues }) => {
  console.log({initialValues})
  const [previewAvatarUrl, setPreviewAvatarUrl] = useState();
  const avatarInputFile = useRef(null);

  const onChangeAvatarInput = (e) => {
    // Assuming only image
    var file = e.target.files[0];
    handleSaveEvent(file)
  };

  const handleSaveEvent = async (file) => {
    const nameImage = await FileApi.uploadImage(file);
    console.log(nameImage);
    // call api update profile
    formik.setFieldValue('hinhAnh', nameImage);
    setPreviewAvatarUrl(nameImage);
    showSuccessNotification("Change Avatar", "Change avatar successfully!")
  }
  const [listDanhMuc, setListDanhMuc] = useState([]);
  useEffect(() => {
    const getDM = async () => {
      try {
        const res = await DanhMucApi.getAllDanhMuc()
        console.log(res)
        setListDanhMuc(res?.content)
      } catch (error) {
        
      }
    }
    getDM();
  }, [])
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      values["giaSanPham"] = values["giaSanPham"] || 100000
      values["tinhTrang"] = +values["tinhTrang"] || 1
      values["idDanhMuc"] = +values["idDanhMuc"] || 1
      onSave(values);
      toggle();
    },
  });
  console.log(formik.values)
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit Form</ModalHeader>
      <ModalBody>
        
      <Form onSubmit={formik.handleSubmit} >
      <FormGroup>
        <Label for="idSanPham">ID</Label>
        <Input
          type="text"
          name="idSanPham"
          id="idSanPham"
          
          value={formik.values.idSanPham}
          onChange={formik.handleChange}
          disabled
        />
      </FormGroup>
      <FormGroup>
        <Label for="tenSanPham">Tên sản phẩm</Label>
        <Input
          type="text"
          name="tenSanPham"
          id="tenSanPham"
          value={formik.values.tenSanPham}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="soLuong">Số lượng</Label>
        <Input
          type="number"
          min={0}
          name="soLuong"
          id="soLuong"
          value={formik.values.soLuong}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="giaSanPham">Giá sản phẩm</Label>
        <Input
          type="number"
          min = {0}
          name="giaSanPham"
          id="giaSanPham"
          value={formik.values.giaSanPham || 100000}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="giaSale">Giá Sale</Label>
        <Input
          type="number"
          min = {0}
          name="giaSale"
          id="giaSale"
          value={formik.values.giaSale}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="hinhAnh">Hình ảnh</Label>
        <Input
          type="file"
          name="hinhAnh"
          id="hinhAnh"
          accept="image/*"
          onChange={(e) => {
            onChangeAvatarInput(e)
            // formik.setFieldValue("hinhAnh", e.currentTarget.files[0]);
          }}
        />
        {/* Hidden input to store the filename or path */}
        <input
          type="hidden"
          name="hinhAnhFilename"
          value={formik.values.hinhAnh ? formik.values.hinhAnh.name : ""}
        />
        {(previewAvatarUrl || formik.values.hinhAnh ) && (
         <Col md="4">
          <div className="text-center">
            <img
              alt="Chris Wood"
              src={`http://localhost:8080/api/v1/files/${previewAvatarUrl || formik.values.hinhAnh}`}
              className="img-responsive mt-2"
              width="200"
              height="228"
            />
            </div>
          </Col>
        )}
      </FormGroup>
      <FormGroup>
        <Label for="ngaySanXuat">Ngày sản xuất</Label>
        <Input
          type="date"
          name="ngaySanXuat"
          id="ngaySanXuat"
          value={formik.values.ngaySanXuat}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="ngayHetHan">Ngày hết hạn</Label>
        <Input
          type="date"
          name="ngayHetHan"
          id="ngayHetHan"
          value={formik.values.ngayHetHan}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="moTa">Mô tả</Label>
        <Input
          name="moTa"
          id="moTa"
          value={formik.values.moTa}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <FormGroup>
      <Label for="tinhTrang">Tình trạng</Label>
        <Input
          name="tinhTrang"
          id="tinhTrang"
          type="select"
          value={formik.values.tinhTrang}
          onChange={formik.handleChange}
        >
          <option value="1">Công khai</option>
          <option value="0">Không Công khai</option>
        </Input>
      </FormGroup>

      <FormGroup>
      <Label for="idDanhMuc">Danh Mục</Label>
        <Input
          name="idDanhMuc"
          id="idDanhMuc"
          type="select"
          value={formik.values.idDanhMuc || (listDanhMuc && listDanhMuc.length > 0 ? listDanhMuc[0].idDanhMuc : '')}
          onChange={formik.handleChange}
        >
          {listDanhMuc?.map((dm, i) => (
            <option key={i} value={dm?.idDanhMuc}>
              {dm?.tenDanhMuc}
            </option>
          ))}
        </Input>
      </FormGroup>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" type="submit">
          Save Changes
        </Button>
      </ModalFooter>
    </Form>
      </ModalBody>
    </Modal>
  );
};

export default EditFormModal;