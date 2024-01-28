import React from "react";
import Header from "../components/header/Header";
import Detail from "../components/detail/Detail";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { useSelector } from "react-redux";

function DetailPage(props) {
  const { userInfo } = useSelector((state) => state.userSignin);
  return (
    <div>
      <Header></Header>
      <Detail></Detail>
      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default DetailPage;
