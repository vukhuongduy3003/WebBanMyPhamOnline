import React from 'react';
import { useDispatch } from 'react-redux';
import {AddToCart} from '../../actions/CartAction'
import {Link} from 'react-router-dom'
import {formatPrice} from '../../untils/index'
import { message} from 'antd';

function Product(props) {
    const { product } = props;
    console.log(product)
    const dispatch = useDispatch();

    const success = () => {
        message.success({
            content: 'Thêm vào giỏ hàng thành công',
            duration: 1,
            className: 'custom-class',
            style: {
                position: 'absolute',
                right: '2rem',
                top: '2rem',
                margin: '1rem 0'
            },
          });
      };

    const  AddProductToCart = async (product) => {
        const action = AddToCart(product);
        await dispatch(action);
        success()
    }


    return (
        <div className="hotsale-listproduct-product">
            <Link to={"/detail/" + product.idSanPham}>
                <img src={`http://localhost:8080/api/v1/files/${product?.hinhAnh}`}></img>
                <p className="hotsale-listproduct-product-name">{product.tenSanPham}</p>
                <div className="price">
                    <span className="price1">{formatPrice((product?.giaSanPham - product?.giaSale).toFixed(0))}đ</span>
                    <span className="price2">{formatPrice(product?.giaSanPham)}đ</span>
                </div>
            </Link>
            {
            <div className="discount">
                <p>{((product?.giaSale / product?.giaSanPham) * 100).toFixed(0)} %</p>
            </div>
            }
            <div className="buy">
                <Link to="" onClick={(e) => {AddProductToCart(product)}}> Mua Ngay</Link>
            </div>
    
        </div>
    );
}

export default Product;