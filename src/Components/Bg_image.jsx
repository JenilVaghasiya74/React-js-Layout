import React from 'react'

function Bg_image() {
  return (
    <div>
      <div className="Main_Box">
        <div className="image">
            <img src={require('../Image/slider2.jpg')} alt="" />
            <div className="text">
                <p className='fs-1'>ABOUT US</p>
                <p className='fs-2'> About</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Bg_image;
