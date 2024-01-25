import React, { useEffect, useState } from "react";
// import {
//   Button,
//   Card,
//   CardBody,
//   Col,
//   Container,
//   Row,
//   Modal,
//   ModalBody,
//   ModalFooter,
//   ModalHeader,
// } from "reactstrap";
// import filterFactory, { customFilter } from 'react-bootstrap-table2-filter';

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import DanhMucApi from '../../api/DanhMucApi';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
// import CustomSearch from "./CustomSearch";
import * as Icon from 'react-feather';
import { FastField, Form, Formik } from "formik";
import { ReactstrapInput } from "reactstrap-formik";
import * as Yup from 'yup';
import { toastr } from "react-redux-toastr";
import BaiVietTable from "../../components/baiviet/BaiVietTable";
import DanhMucTable from "../../components/danhmuc/DanhMucTable";
const size = 20
function DanhMucPage() {
  const [baiViets, setBaiViets] = useState({
    data: [],
    totalElements: 0,
  })
  // const {
  //             "idBaiViet": 1,
  //             "tieuDe": "Tiêu đề 01",
  //             "anhBaiViet": "1.png",
  //             "tomTat": "Tóm tắt 1",
  //             "noiDung": "Nội dung 1",
  //             "ngayViet": "2024-01-25T00:00:00"
  //         },
  useEffect(() => {
    const getAllGroup = async () => {
      const result = await DanhMucApi.getAllDanhMuc();
      const data = result.content;
      const totalElements = result.totalElements;
      setBaiViets({data, totalElements})
    }
  //   {
  //     "content": [
  //         {
  //             "idBaiViet": 1,
  //             "tieuDe": "Tiêu đề 01",
  //             "anhBaiViet": "1.png",
  //             "tomTat": "Tóm tắt 1",
  //             "noiDung": "Nội dung 1",
  //             "ngayViet": "2024-01-25T00:00:00"
  //         },
  //         {
  //             "idBaiViet": 2,
  //             "tieuDe": "Tiêu đề 02",
  //             "anhBaiViet": "1.png",
  //             "tomTat": "Tóm tắt 2",
  //             "noiDung": "Nội dung 3",
  //             "ngayViet": "2024-01-25T00:00:00"
  //         }
  //     ],
  //     "pageable": {
  //         "sort": {
  //             "sorted": false,
  //             "unsorted": true,
  //             "empty": true
  //         },
  //         "offset": 0,
  //         "pageNumber": 0,
  //         "pageSize": 10,
  //         "unpaged": false,
  //         "paged": true
  //     },
  //     "totalElements": 2,
  //     "totalPages": 1,
  //     "last": true,
  //     "size": 10,
  //     "number": 0,
  //     "sort": {
  //         "sorted": false,
  //         "unsorted": true,
  //         "empty": true
  //     },
  //     "numberOfElements": 2,
  //     "first": true,
  //     "empty": false
  // }
    getAllGroup();
  }, [size]);
  console.log("DEBUG::  ", baiViets)
  return (
    <div>
      <DanhMucTable {...{data: baiViets.data, setBaiViets}} />
    </div>
  )
}

export default DanhMucPage