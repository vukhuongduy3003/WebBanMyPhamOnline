import React, { useEffect, useMemo } from 'react';
import { formatPrice } from '../../untils';
import './ShoppingCart.css'
import ListProduct from './ListProduct'
import { useDispatch, useSelector } from 'react-redux';
import {
    Link,
    useHistory
} from "react-router-dom";
import storage from '../../Storage/Storage';
import { AddToCart } from '../../actions/CartAction';

function Cart(props) {
    const history = useHistory()
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    var userInfo = useSelector((state) => state.userSignin.userInfo);
    const totalPrice = useMemo(
      () => cartItems.reduce(
      (total, item) => total + item.qty * (item.giaSanPham - item.giaSale),
      0
    ), [cartItems]);
    // useEffect(() => {
    //   const products = storage.getListCarts();
    //   products.forEach(product => {
    //     dispatch(AddToCart(product))
    //   });
    // }, [])
    const Order = () => {
      if (userInfo) {
        history.push("/order");
      } else {
        alert("ban can dang nhap");
        history.push("/login");
      }
    };

    return (
      <section id="shopping-cart">
        <div className="shopping-cart">
          <div className="shopping-cart-header">
            <Link to="/" className="back">
              {/* <BsChevronDoubleLeft></BsChevronDoubleLeft> */}
              Tiếp tục mua hàng
            </Link>
            <h2 className="shopping-cart-title">Giỏ hàng</h2>
          </div>

          {cartItems ? <ListProduct products={cartItems}/> : ""}

          <div className="total-price">
            <span className="left">Tổng tiền</span>
            <span className="right">{formatPrice(totalPrice)}</span>
          </div>
          {totalPrice <= 0 ?
            ""
          : (
            <div className="order">
              <Link to="#" onClick={() => Order()}> Đặt Hàng </Link>
            </div>
          )}
        </div>
      </section>
    );


}

export default Cart;
