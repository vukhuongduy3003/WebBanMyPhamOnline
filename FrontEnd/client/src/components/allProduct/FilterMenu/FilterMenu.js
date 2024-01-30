import React, { useEffect, useState } from "react";
import "./FilterMenu.css";
import { Dropdown } from "antd";
import { DownOutlined} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllTypeProduct } from "../../../actions/ListTypeProductAction";
import { filterProductByRandomField, filterProductByType } from "../../../actions/ProductAction";

export default function FilterMenu() {
  const dispatch = useDispatch();
  const [dataFilter, setDataFilter] = useState({});
  const { List} = useSelector(state => state.allTypeProduct)
  console.log(List)
  useEffect(() => {
    dispatch(getAllTypeProduct())
  }, [dispatch])
  useEffect(() => {
    dispatch(filterProductByType(dataFilter));
  }, [dataFilter]);
  const filterMenuItemAntd = (item) => (
    <div className="filter-menu-item">
      <div
        className={
          dataFilter[`${item.property}`]
            ? `filter-menu-item-name active`
            : `filter-menu-item-name`
        }
      >
        <Dropdown overlay={menuShow(item, item.options)} trigger={["click"]}>
          <span className="ant-dropdown-link">
            {dataFilter[`${item.property}`]
              ? dataFilter[`${item.property}`]
              : item.name}
            <DownOutlined />
          </span>
        </Dropdown>
      </div>
    </div>
  );

  const menuShow = (menuItem, arrItem) => (
    <div className="menu-show">
      <div className="menu-show-list">
        {arrItem.map((item) => (
          <div
            className={`menu-show-item`}
            onClick={() => handleClickMenuShow(item, menuItem)}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="menu-show-btn">
        <button
          className="cancel"
          onClick={() => CancelChooseMenuShow(menuItem, arrItem)}
        >
          Bỏ Chọn
        </button>
      </div>
    </div>
  );

  const handleClickMenuShow = (item, menuItem) => {
    const data = {};
    data[`${menuItem.property}`] = item;

    setDataFilter({ ...dataFilter, ...data });
  };

  const CancelChooseMenuShow = (menuItem, arrItem) => {
    delete dataFilter[`${menuItem.property}`];
    const newDataFilter = { ...dataFilter };
    setDataFilter(newDataFilter);
  };

  const MenuFirmProduct = (item) => {
    return (
    <div
      className={
        dataFilter[`type`] === item.idDanhMuc
          ? `filter-menu-firm-item active`
          : "filter-menu-firm-item"
      }
      onClick={() => HandleFilterProductByType(item.idDanhMuc)}
    >
      <span>{item?.tenDanhMuc}</span>
    </div>
  )};

  const HandleFilterProductByType = async (name) => {
    if (dataFilter.type === name) {
      delete dataFilter[`type`];
      const newDataFilter = { ...dataFilter };
      setDataFilter({ ...newDataFilter });
    } else {
      setDataFilter({ ...dataFilter, type: name });
    }
  };

  return (
    <div>
      <div className="filter-menu-firm">
        {
          List ? (List.map((item) => MenuFirmProduct(item))) : ''
        }
      </div>
    </div>
  );
}
