import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none'}}
      onClick={onClick}
    />
  );
}

function Carousel(props) {
  let {slider, slider1, slider2} = props
  const [nav, setNav] = useState({nav1: null, nav2: null})

  useEffect(() => {
    setNav({
      nav1: slider1,
      nav2: slider2
    })
  }, [])

  const settings = {
    loop:true,
    dots: false,
    infinite: true,
    
    // autoplay: true,
    // autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

 
  const next = () =>  {
    slider1.slickNext();
  }
  const previous = () => {
    slider2.slickPrev();
  }

  return (
    <section id="carousel">
      <div className="carousel">
        <div className="carousel-left">
          <div className="carousel-left-slide">
            <Slider asNavFor={nav.nav2}
                    ref={slider => (slider1 = slider)} 
                    {...settings} >
              <div key={1}>
                <img height={350} style={{objectFit: 'cover'}} src="https://media.hcdn.vn/hsk/1706496713home-6061.jpg"></img>
              </div>
              <div key={2}>
                <img  height={350}  style={{objectFit: 'cover'}} src="https://pos.nvncdn.com/d893b9-45589/bn/20230328_GzpQyr60.jpeg"></img>
              </div>
              <div key={3}>
                <img  height={350}  style={{objectFit: 'cover'}} src="https://media.hcdn.vn/hsk/1705404531web.jpg"></img>
              </div>
              <div key={4}>
                <img  height={350}  style={{objectFit: 'cover'}} src="https://etimg.etb2bimg.com/thumb/msid-86771640,imgsize-189454,width-1200,height=765,overlay-etretail/health-and-beauty/cosmetics-and-fragrances/lakme-wont-carry-tests-on-animals-for-its-cosmetics-products.jpg"></img>
              </div>
            </Slider>
            <div className='carousel-left-move' onClick={() => previous()}>
                <div className="prev">
                    <LeftOutlined></LeftOutlined>
                </div>
                <div className="next" onClick={() => next()}>
                    <RightOutlined></RightOutlined>
                </div>
            </div>
          </div>
          <div className="carousel-left-bottom">
            <Slider asNavFor={nav.nav1}
                    ref={slider => (slider2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                     >
              
              <div>
                TRỢ GIÁ MÙA DỊCH <br></br> Ưu đãi vô địch
              </div>
              <div>
              Kem Chống Nắng La Roche-Posay  <br></br>  Hotsale giảm sập sàn
              </div>
              <div>
              Sữa Chống Nắng Anessa Dưỡng Da Kiềm Dầu <br></br>  Giá mới cực tốt
              </div>
              <div>
              Kem Anessa Dưỡng Da Kiềm Dầu  <br></br>  Mua đi chờ chi
              </div>
              <div>
              ĐẠI TIỆC ÂM THANH   <br></br>   Loa sale bung nóc
              </div>

            </Slider>
          </div>
        </div>
        <div className="carousel-right">
          <div className="carousel-right-item">
            <img style={{objectFit: 'cover'}} src="https://pos.nvncdn.com/d893b9-45589/bn/20231108_HvztCAds.jpeg"></img>
          </div>
          <div className="carousel-right-item">
            <img style={{objectFit: 'cover'}} src="https://pos.nvncdn.com/d893b9-45589/bn/20230328_GzpQyr60.jpeg"></img>
          </div>
          <div className="carousel-right-item">
            <img style={{objectFit: 'cover'}} src="https://pos.nvncdn.com/d893b9-45589/ps/content/20230117_EAN3PLZNwc8OBbRF4zeHK7D0.jpg"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
