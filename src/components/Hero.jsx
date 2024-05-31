import React, { useState } from 'react'
import LocationImg from '../assets/images/svg/location-svg.svg'
import mailImg from '../assets/images/svg/message-svg.svg'
import calImg from '../assets/images/svg/call-svg.svg'
import timerImg from '../assets/images/svg/timer-svg.svg'
import pagelogo from '../assets/images/svg/ice-logo.svg'

function Hero() {
    const [nav, setnav] = useState(false)
    return (
        <div className='hero_bg_img min-vh-100'>
            <div className="container">
                <div className='d-flex flex-wrap justify-content-between py_14 mx_45 gap-3'>
                    <div className='d-flex align-items-center gap-2'>
                        <img src={LocationImg} alt="LocationImg" />
                        <p className='ff_acmin fw-normal text16_xs lh_24 color_white opacity_70 mb-0'>Crawley Mill Industrial Estate, Witney, Oxfordshire </p>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <img src={mailImg} alt="mailImg" />
                        <p className='ff_acmin fw-normal text16_xs lh_24 color_white opacity_70 mb-0 text-nowrap'>book@dryiceblastingpro.co.uk</p>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <img src={calImg} alt="calImg" />
                        <p className='ff_acmin fw-normal text16_xs lh_24 color_white opacity_70 mb-0 text-nowrap'>01865123456 </p>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <img src={timerImg} alt="timerImg" />
                        <p className='ff_acmin fw-normal text16_xs lh_24 color_white opacity_70 mb-0 text-nowrap'>Mon - Fri: 9am to 5pm</p>
                    </div>
                </div>
                <div className='nav_property d-flex justify-content-between align-items-center'>
                    <img src={pagelogo} alt="pagelogo" />
                    <ul className={`${nav ? "end-0" : "right_100"} mobile_view d-flex gap_24 ps-0 mb-0`}>
                        <li><a href="" className='ff_acmin fw-bold text16_xs lh_19 color_grey text-nowrap'>Home</a></li>
                        <li><a href="" className='ff_acmin fw-bold text16_xs lh_19 color_grey text-nowrap'>About us</a></li>
                        <li><a href="" className='ff_acmin fw-bold text16_xs lh_19 color_grey text-nowrap'>Services</a></li>
                        <li><a href="" className='ff_acmin fw-bold text16_xs lh_19 color_grey text-nowrap'>Pricing</a></li>
                        <li><a href="" className='ff_acmin fw-bold text16_xs lh_19 color_grey text-nowrap'>Blog</a></li>
                        <li><a href="" className='ff_acmin fw-bold text16_xs lh_19 color_grey text-nowrap'>Contact us</a></li>
                        <li><button className='ff_acmin fw-bold text16_xs lh_19 color_white btn_property d-md-none d-block'>Call Us</button></li>
                    </ul>
                    <button className='ff_acmin fw-bold text16_xs lh_19 color_white btn_property d-md-block d-none'>Call Us</button>
                    <div className='menu d-lg-none z_6' onClick={() => setnav(!nav)}>
                        <span className=''></span>
                        <span className='my-2'></span>
                        <span></span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero