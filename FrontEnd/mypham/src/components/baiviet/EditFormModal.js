// EditFormModal.js
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useFormik } from 'formik';

const EditFormModal = ({ isOpen, toggle, onSave, initialValues }) => {
  console.log(initialValues)
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      onSave(values);
      toggle();
    },
  });
  console.log(formik.values)
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit Form</ModalHeader>
      <ModalBody>
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <Label for="idBaiViet">ID</Label>
            <Input
              type="text"
              name="idBaiViet"
              id="idBaiViet"
              value={formik.values.idBaiViet}
              onChange={formik.handleChange}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="ngayViet">Ngày Viết</Label>
            <Input
              type="date"
              name="ngayViet"
              id="ngayViet"
              value={formik.values.ngayViet}
              onChange={formik.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="tieuDe">Tiêu Đề</Label>
            <Input
              type="text"
              name="tieuDe"
              id="tieuDe"
              value={formik.values.tieuDe}
              onChange={formik.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="tomTat">Tóm Tắt</Label>
            <Input
              type="text"
              name="tomTat"
              id="tomTat"
              value={formik.values.tomTat}
              onChange={formik.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="noiDung">Nội Dung</Label>
            <Input
              type="textarea"
              name="noiDung"
              id="noiDung"
              value={formik.values.noiDung}
              onChange={formik.handleChange}
            />
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