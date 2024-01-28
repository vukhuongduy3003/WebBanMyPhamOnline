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
                <img height={600} src="https://topprint.vn/wp-content/uploads/2021/07/banner-my-pham-dep-11.png"></img>
              </div>
              <div key={2}>
                <img  height={600} src="https://printgo.vn/uploads/media/792227/banner-quang-cao-my-pham-24_1623052777.jpg"></img>
              </div>
              <div key={3}>
                <img  height={600} src="https://intphcm.com/data/upload/1598713492-banner-my-pham-2.jpg"></img>
              </div>
              <div key={4}>
                <img  height={600} src="https://cafebiz.cafebizcdn.vn/thumb_w/600/pr/2022/photo1658455342930-16584553430462042350104-63794084405807.jpg"></img>
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
                NOTE 20 ULTRA 5G  <br></br>  Hotsale giảm sập sàn
              </div>
              <div>
              XR CHÍNH HÃNG  <br></br>  Giá mới cực tốt
              </div>
              <div>
              APPLE WATCH SE  <br></br>  Mua đi chờ chi
              </div>
              <div>
              ĐẠI TIỆC ÂM THANH   <br></br>   Loa sale bung nóc
              </div>

            </Slider>
          </div>
        </div>
        <div className="carousel-right">
          <div className="carousel-right-item">
            <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/RB_S21.png"></img>
          </div>
          <div className="carousel-right-item">
            <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/iPhone_12_690x300_copyssspng.png"></img>
          </div>
          <div className="carousel-right-item">
            <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/11lite-690-300-max.png"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
