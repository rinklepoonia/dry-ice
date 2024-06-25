import React from 'react'
import behindCarImg from '../assets/images/webp/behind-car-img.webp'
import layer3 from '../assets/images/webp/layer3.webp'
import layer4 from '../assets/images/webp/layer4.webp'
import playBtn from '../assets/images/webp/playbutton.webp'

function BehindSection() {
    return (
        <div className='behind_bg_img'>
            <img className='w-100 mt_2' src={layer3} alt="layer3" />
            <div className="container">
                <h2 className='ff_titling fw-bold text48_2xl lh_lg_57 lh_39 color_white text-center mx-auto mb-2 pb-1 pt-lg-5 pt-2'>Behind the Scenes
                    <span className='d-lg-block'>Dry Ice Blasting a Car</span></h2>
                <p className='ff_acmin fw-normal text16_xs lh_24 color_white text-center mb-lg-5 mb-3'>From the initial setup to the final sweep, discover how we elevate car cleaning to an <span className='d-lg-block'>art form, delivering immaculate results every time.</span></p>
                <div data-aos="zoom-in" className='position-relative'>
                    <img className='w-100' src={behindCarImg} alt="behindCarImg" />
                    <div className='position-absolute pos_playbtn'><img className='max_w_md_60 max_w_25 cursor_pointer' src={playBtn} alt="playBtn" /></div>
                </div>
                <p className='ff_acmin fw-bold text16_xs lh_24 color_white mt-md-4 mt-3 pt-lg-3 pt-0 text-center mb-md-4 mb-2'>Discover a cleaner, fresher, and more beautiful car, inside and out, with our advanced dry ice blasting services.</p>
                <div className='text-center mb-lg-3 mb-0'><button className='ff_acmin fw-bold text16_xs lh_19 color_white btn_property btn_hover transition'>Get Instant Quote</button></div>
            </div>
            <img className='w-100 mb_1' src={layer4} alt="layer4" />
        </div>
    )
}

export default BehindSection