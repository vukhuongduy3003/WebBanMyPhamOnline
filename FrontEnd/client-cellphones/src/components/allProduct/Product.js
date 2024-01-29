import React, { useCallback } from 'react';
import {formatPrice} from '../../untils/index'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {AddToCart as AddProduct} from '../../actions/CartAction'
import { useDispatch } from 'react-redux';


function Product(props) {
    const { product } = props;
    const history = useHistory();
    const dispatch  = useDispatch();
    const AddToCart = useCallback(() => {
        console.log({product})
        const action = AddProduct(product);
        dispatch(action);
    }, [product])

    return (
        <div className="hotsale-listproduct-product">
            <Link to={"/detail/" + product.idSanPham}>
                <img src={`http://localhost:8080/api/v1/files/${product?.hinhAnh}`}></img>
                <p className="hotsale-listproduct-product-name">{product.tenSanPham}</p>
                <div className="price">
                    <span className="price1">{formatPrice(product?.giaSanPham - product?.giaSale)}đ</span>
                    <span className="price2">{formatPrice(product?.giaSanPham)}đ</span>
                </div>
            </Link>
            {
            <div className="discount">
                <p>{((product?.giaSale / product?.giaSanPham) * 100).toFixed(1)} %</p>
            </div>
            }
            <div className="buy">
                <a onClick={() => {
                AddToCart()
                history.push('/cart')
                }}> Mua Ngay</a>
            </div>
        </div>
    );
}

export default Product;