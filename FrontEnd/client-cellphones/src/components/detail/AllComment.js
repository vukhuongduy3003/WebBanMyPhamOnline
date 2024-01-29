import React, { useState } from "react";
import { Col, Row, Avatar, Card } from "antd";
import { WechatOutlined, PushpinOutlined, LockOutlined  } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  pinCommentProduct,
  repCommentProduct,
} from "../../actions/ProductAction";
import { useParams } from "react-router-dom";
import AllRepComment from "./AllRepComment";
import { getFirstCharacterUser } from "../../untils";

function AllComment(props) {
  const { id } = useParams();
  const { allComment } = props;
  const dispatch = useDispatch();
  const [repCmt, setRepCmt] = useState({ key: "", status: false });
  const { userInfo } = useSelector((state) => state.userSignin);
  const [repValue, setRepValue] = useState("");
  const showRepComment = (id) => {
    setRepCmt({ key: id, status: !repCmt.status });
  };
  const handleRepComment = (value) => {
    if (userInfo) {
      const comment = {
        idComment: repCmt.key,
        isAdmin: userInfo.isAdmin,
        content: repValue,
        nameUser: userInfo.name,
      };
      dispatch(repCommentProduct(id, comment));
      setRepValue("");
      setRepCmt({ key: "", status: false });
    } else alert("Đăng nhập đi bạn eiii");
  };

  return (
    <div class="all-comment">
      {allComment?.map((comment) => (
        <>
          <Card span={18} style={{ marginTop: "1rem" }} xs={24} sm={24} md={18}>
            <div className="all-comment-info">
              <div style={{ display: "flex", width: "100%" }}>
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ENMFZRObGNd5SheygE89TYfbKu5sdEDjUg&usqp=CAU"
                  size={48}
                />
                <div className="all-comment-info-name" style={{ marginLeft: "0.5rem" }}>
                  <strong>{comment.fullName}</strong>
                  <div>Khách Hàng</div>
                </div>
              </div>
            </div>
            <div className="all-comment-content" style={{ marginTop: "0.5rem" }}>
              {comment.noiDung}
            </div>
          </Card>
        </>
      ))}
    </div>
  );
}

export default AllComment;
