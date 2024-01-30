import React from 'react';
import Header from '../components/header/Header';
import Carousel from '../components/Slider/Carousel';
import IPhone from '../components/HotSale/components/Iphone'
import Samsung from '../components/HotSale/components/Samsung'
import Xiaomi from '../components/HotSale/components/Xiaomi';
import Footer from '../components/footer/Footer'
import AppChat from '../components/AppChat/AppChat'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { useDispatch, useSelector } from 'react-redux';
import { getAllTypeProduct } from "../actions/ListTypeProductAction";
import ListProduct from '../components/HotSale/ListProduct';
import { handlePercentDiscount } from '../untils';

function HomePage(props) {
    const {userInfo} = useSelector(state => state.userSignin)
    const { List} = useSelector(state => state.allTypeProduct)
    const dispatch = useDispatch()
        console.log(List)
        React.useEffect(() => {
            dispatch(getAllTypeProduct())
        }, [dispatch])
    return (
        <div style={{position: 'relative'}}>
            <Header></Header>
            <Carousel></Carousel>
            {List?.map((l,i) => (
                <section id="hotsale iphone" key={l.idDanhMuc}>
                    <div className="hotsale">
                        <h2>{l.tenDanhMuc}</h2>
                        <ListProduct HotSaleProducts={handlePercentDiscount(l?.sanPhams)} />
                    </div>
                </section>
            ) )}
            <Footer></Footer>
            <ScrollToTop></ScrollToTop>
            {
               userInfo && userInfo.isAdmin === false ? (<AppChat></AppChat>) : ""
            }
        </div>
    );
}

export default HomePage;