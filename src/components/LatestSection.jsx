import React from 'react'
import latest1Img from '../assets/images/webp/latestImg1.webp'
import latest2Img from '../assets/images/webp/latestImg2.webp'
import latest3Img from '../assets/images/webp/latestImg3.webp'

function LatestSection() {
    return (
        <div id='blog' className='pb_xl_58 pt-lg-5 pt-0'>
            <div className="container">
                <h2 className='ff_titling fw-bold text48_2xl lh_lg_57 lh_39 color_blue text-center mb-3'>Latest News & Insights</h2>
                <p className='ff_acmin fw-normal text16_xs lh_24 color_blue opacity_70 mb-5 text-center'>Uncover the latest insights and innovation in car care.</p>
                <div className="row latest_rowGap">
                    <div data-aos="zoom-in" className="col-lg-4 col-sm-6 d-flex justify-content-xxl-end justify-content-center">
                        <div className='latest_box'>
                            <img className='w-100 mb-3 mb-1' src={latest1Img} alt="latest1Img" />
                            <p className='ff_acmin fw-semibold text16_xs lh_24 color_blue opacity_80 mb-2'>January 1st, 2024</p>
                            <p className='ff_acmin fw-bold text16_xs lh_24 color_blue max_w_323 mb-0'>What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary Car Cleaning</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="col-lg-4 col-sm-6 d-flex justify-content-center">
                        <div className='latest_box'>
                            <img className='w-100 mb-3 mb-1' src={latest2Img} alt="latest2Img" />
                            <p className='ff_acmin fw-semibold text16_xs lh_24 color_blue opacity_80 mb-2'>January 1st, 2024</p>
                            <p className='ff_acmin fw-bold text16_xs lh_24 color_blue max_w_323 mb-0'>What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary Car Cleaning</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="col-lg-4 col-sm-6 d-flex justify-content-xxl-start justify-content-center">
                        <div className='latest_box'>
                            <img className='w-100 mb-3 mb-1' src={latest3Img} alt="latest3Img" />
                            <p className='ff_acmin fw-semibold text16_xs lh_24 color_blue opacity_80 mb-2'>January 1st, 2024</p>
                            <p className='ff_acmin fw-bold text16_xs lh_24 color_blue max_w_323 mb-0'>What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary Car Cleaning</p>
                        </div>
                    </div>
                </div>
                <div className='text-center mt_md_40 mt_10'>
                    <button className='ff_acmin fw-bold text16_xs lh_19 color_white btn_property transition btn_hover'>More Blogs</button>
                </div>
            </div>
        </div>
    )
}

export default LatestSection