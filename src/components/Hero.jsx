import React, { useState } from 'react'
import LocationImg from '../assets/images/svg/location-svg.svg'
import mailImg from '../assets/images/svg/message-svg.svg'
import calImg from '../assets/images/svg/call-svg.svg'
import timerImg from '../assets/images/svg/timer-svg.svg'
import pagelogo from '../assets/images/svg/ice-logo.svg'
import tikMark from '../assets/images/svg/tik-mark-img.svg'
import ComnBtn from './ComnBtn'

function Hero() {
    const [nav, setnav] = useState(false)
    return (
        <div className='hero_bg_img min_vh_100 h_md_954 h_750 d-flex flex-column'>
            <div className="container">
                <div className='d-flex justify-content-between py_14 mx_45 gap-4 overflow-x-auto'>
                    <div className='d-flex align-items-center gap-2'>
                        <img src={LocationImg} alt="LocationImg" />
                        <p className='ff_acmin fw-normal text16_xs lh_24 color_white opacity_70 mb-0 text-nowrap'>Crawley Mill Industrial Estate, Witney, Oxfordshire </p>
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
            <div className='d-flex flex-column justify-content-center align-items-center flex_grow_1'>
                <div className='container'>
                    <div className='pt_md_87 pt_35 d-flex flex-column align-items-center'>
                        <h1 className='ff_titling fw-bold text96_3xl lh_lg_115 lh_md_90 lh_65 color_white max_w_730 text-center mb-md-3 mb-0'>Automotive Dry <span className='d-lg-block'>Ice Cleaning</span></h1>
                        <p className='ff_acmin fw-normal text20_md lh_30 color_white max_w_730 text-center mb-4 pb-lg-3 pb-0'>Discover the ultimate clean for your machine.
                            <span className='d-lg-block'>No chemicals, no abrasives and no drama.</span></p>
                        <ComnBtn className="Get Instant Quote" />
                        <div className='d-flex flex-wrap align-items-center justify-content-center gap_28 mt_md_40 mt_20 no_box'>
                            <div className='d-flex align-items-center gap-3'>
                                <img src={tikMark} alt="tikMark" />
                                <p className='ff_acmin fw-bold text16_xs lh_24 color_white mb-0'>Non-Abrasive</p>
                            </div>
                            <div className='d-flex align-items-center gap-3'>
                                <img src={tikMark} alt="tikMark" />
                                <p className='ff_acmin fw-bold text16_xs lh_24 color_white mb-0'>No Chemicals</p>
                            </div>
                            <div className='d-flex align-items-center gap-3'>
                                <img src={tikMark} alt="tikMark" />
                                <p className='ff_acmin fw-bold text16_xs lh_24 color_white mb-0'>No Mess</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Hero