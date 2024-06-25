import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var settings = {

  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function Carousels(props) {
  return (
    <div>

      <Slider {...settings}>
        {
          props.slider.map((item) => {
            return (
              
              <div>
                <div className="image-slider position-relative">
                  <img src={item.img}></img>
                  <div className="text-slider position-absolute  ">
                    <h1 className='mt-5 w-25  text-center mx-auto'>{item.title}<br /></h1>
                    <a href="#" className='text-decoration-none text-white'> {item.button}  </a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default Carousels
