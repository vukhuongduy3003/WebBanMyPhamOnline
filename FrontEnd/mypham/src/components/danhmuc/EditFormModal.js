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
            <Label for="idDanhMuc">ID</Label>
            <Input
              type="text"
              name="idDanhMuc"
              id="idDanhMuc"
              value={formik.values.idDanhMuc}
              onChange={formik.handleChange}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="tieuDe">Tên Danh Mục</Label>
            <Input
              type="text"
              name="tenDanhMuc"
              id="tenDanhMuc"
              value={formik.values.tenDanhMuc}
              onChange={formik.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="thuTu">Thứ tự</Label>
            <Input
              type="number"
              name="thuTu"
              id="thuTu"
              value={formik.values.thuTu}
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