import React from 'react';
import {formatPrice} from '../../untils'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function Product(props) {
    const { product } = props;
    function AddToCart(product) {
        // const action = AddProduct(product);
        // dispatch(action);
    }

    return (
        <div className="hotsale-listproduct-product">
            <Link to={"/detail/" + product.idSanPham}>
                <img src={`http://localhost:8080/api/v1/files/${product?.hinhAnh}`}></img>
                <p className="hotsale-listproduct-product-name">{product.tenSanPham}</p>
                <div className="price">
                    <span className="price1">{formatPrice(product?.giaSale)}đ</span>
                    <span className="price2">{formatPrice(product?.giaSanPham)}đ</span>
                </div>
            </Link>
            {
            <div className="discount">
                <p>{(product?.giaSale / product?.giaSanPham) * 100} / %</p>
            </div>
            }
            <div className="buy">
                <a href="/cart" onClick={() => AddToCart(product)}> Mua Ngay</a>
            </div>
        </div>
    );
}

export default Product;