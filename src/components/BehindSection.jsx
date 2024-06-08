import React from 'react'
import behindCarImg from '../assets/images/png/behind-car-img.png'
import layer3 from '../assets/images/png/layer3.png'
import layer4 from '../assets/images/png/layer4.png'
import playBtn from '../assets/images/png/playbutton.png'

function BehindSection() {
    return (
        <div className='behind_bg_img'>
            <img className='w-100 mt_2' src={layer3} alt="layer3" />
            <div className="container">
                <h2 className='ff_titling fw-bold text48_2xl lh_lg_57 lh_39 color_white text-center mx-auto mb-2 pb-1'>Behind the Scenes
                    <span className='d-lg-block'>Dry Ice Blasting a Car</span></h2>
                <p className='ff_acmin fw-normal text16_xs lh_24 color_white text-center mb-lg-5 mb-3'>From the initial setup to the final sweep, discover how we elevate car cleaning to an <span className='d-lg-block'>art form, delivering immaculate results every time.</span></p>
                <div className='position-relative'>
                    <img className='w-100' src={behindCarImg} alt="behindCarImg" />
                    <div className='position-absolute pos_playbtn'><img className='max_w_md_60 max_w_25 cursor_pointer' src={playBtn} alt="playBtn" /></div>
                </div>
                <p className='ff_acmin fw-bold text16_xs lh_24 color_white mt-4 pt-lg-3 pt-0 text-center'>Discover a cleaner, fresher, and more beautiful car, inside and out, with our advanced dry ice blasting services.</p>
                <div className='text-center'><button className='ff_acmin fw-bold text16_xs lh_19 color_white btn_property btn_hover transition'>Get Instant Quote</button></div>
            </div>
            <img className='w-100' src={layer4} alt="layer4" />
        </div>
    )
}

export default BehindSection