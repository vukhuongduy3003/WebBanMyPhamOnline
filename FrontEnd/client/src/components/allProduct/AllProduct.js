import React, { useEffect } from 'react';
import ListProduct from './ListProduct'
import './Sale.css'
import {handlePercentDiscount} from '../../untils/index'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct} from '../../actions/ProductAction';

import FilterProduct from './FilterProduct';
import SortByPrice from './SortByPrice/SortByPrice';
import { Pagination } from 'antd';


function AllProduct(props) {
    const dispatch = useDispatch()
    const onChange = (page, size) => {
        console.log(page, size)
    }
    const product = useSelector(state => state.allProduct.product)

    useEffect(() => {
        dispatch(getAllProduct())
        
        return () => {
            return []
        }
    }, [dispatch])

    return (
        <section id="hotsale iphone">
            <div className="hotsale">
                <FilterProduct></FilterProduct>
                <SortByPrice></SortByPrice>
                {
                   product && product.length > 0 ? (<ListProduct HotSaleProducts={handlePercentDiscount(product)}></ListProduct>) : (<span>Không có sản phẩm</span>)
                }
                <Pagination defaultCurrent={6} total={500} onChange={onChange} onShowSizeChange={onChange} style={{marginTop: 26}} className='mb-20' />;
            </div>
        </section>

    );
}


export default AllProduct;