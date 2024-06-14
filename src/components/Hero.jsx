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
    if (nav === true) {
        document.body.classList.add("overflow_hidden");
    } else {
        document.body.classList.remove("overflow_hidden");
    }
    return (
        <div className='hero_bg_img min_vh_100 h_md_954 h_750 d_flex flex-column'>
            <div className="container">
                <div className='d-lg-flex justify-content-between py_14 mx_45 gap-4 overflow-x-auto d-none'>
                    <a href="https://www.google.com/maps" target='_blank' className='d-flex align-items-center gap-2'>
                        <img src={LocationImg} alt="LocationImg" />
                        <p className='ff_acmin fw-normal text16_xs lh_24 color_white opacity_70 mb-0 text-nowrap info_hover transition'>Crawley Mill Industrial Estate, Witney, Oxfordshire </p>
                    </a>
                    <a href="mailto:@example.com" className='d-flex align-items-center gap-2'>
                        <img src={mailImg} alt="mailImg" />
                        <p className='ff_acmin fw-normal text16_xs lh_24 color_white opacity_70 mb-0 text-nowrap info_hover transition'>book@dryiceblastingpro.co.uk</p>
                    </a>
                    <a href="Tel: 123-456-7890" className='d-flex align-items-center gap-2'>
                        <img src={calImg} alt="calImg" />
                        <p className='ff_acmin fw-normal text16_xs lh_24 color_white opacity_70 mb-0 text-nowrap info_hover transition'>01865123456 </p>
                    </a>
                    <a href="" className='d-flex align-items-center gap-2'>
                        <img src={timerImg} alt="timerImg" />
                        <p className='ff_acmin fw-normal text16_xs lh_24 color_white opacity_70 mb-0 text-nowrap info_hover transition'>Mon - Fri: 9am to 5pm</p>
                    </a>
                </div>
                <div className='nav_property d-flex justify-content-between align-items-center mt-lg-0 mt-3'>
                    <a href=""> <img src={pagelogo} alt="pagelogo" /></a>
                    <ul className={`${nav ? "end-0" : "right_100"} mobile_view d-flex gap_24 ps-0 mb-0`}>
                        <li><a href="#home" className='ff_acmin fw-bold text16_xs lh_19 color_grey text-nowrap nav_hover transition'>Home</a></li>
                        <li><a href="#aboutUs" className='ff_acmin fw-bold text16_xs lh_19 color_grey text-nowrap nav_hover transition'>About us</a></li>
                        <li><a href="#servise" className='ff_acmin fw-bold text16_xs lh_19 color_grey text-nowrap nav_hover transition'>Services</a></li>
                        <li><a href="#pricing" className='ff_acmin fw-bold text16_xs lh_19 color_grey text-nowrap nav_hover transition'>Pricing</a></li>
                        <li><a href="#blog" className='ff_acmin fw-bold text16_xs lh_19 color_grey text-nowrap nav_hover transition'>Blog</a></li>
                        <li><a href="#contact" className='ff_acmin fw-bold text16_xs lh_19 color_grey text-nowrap nav_hover transition'>Contact us</a></li>
                        <li><button className='ff_acmin fw-bold text16_xs lh_19 color_white btn_property d-md-none d-block'>Call Us</button></li>
                    </ul>
                    <button className='ff_acmin fw-bold text16_xs lh_19 color_white btn_property d-md-block d-none btn_hover transition'>Call Us</button>
                    <div className='menu d-lg-none z_6' onClick={() => setnav(!nav)}>
                        <span className=''></span>
                        <span className='my-2'></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in" id='home' className='d-flex flex-column justify-content-center align-items-center flex_grow_1'>
                <div className='container'>
                    <div className='pt_md_87 pt_35 d-flex flex-column align-items-center'>
                        <h1 className='ff_titling fw-bold text96_3xl lh_lg_115 lh_md_90 lh_65 color_white max_w_730 text-center mb-md-3 mb-4'>Automotive Dry <span className='d-lg-block'>Ice Cleaning</span></h1>
                        <p className='ff_acmin fw-normal text20_md lh_30 color_white max_w_730 text-center mb-md-4 mb-0 pb-lg-3 pb-0'>Discover the ultimate clean for your machine.
                            <span className='d-lg-block'>No chemicals, no abrasives and no drama.</span></p>
                        <button className='ff_acmin fw-bold text16_xs lh_19 color_white btn_property d-md-block d-none btn_hover transition'>Get Instant Quote</button>
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