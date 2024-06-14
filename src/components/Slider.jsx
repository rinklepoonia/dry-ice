import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import sliderImg1 from '../assets/images/png/sliderCar1.png'
import sliderImg2 from '../assets/images/png/sliderCar2.png'
import sliderImg3 from '../assets/images/png/sliderCar3.png'
import sliderImg4 from '../assets/images/png/sliderCar4.png'
import sliderImg5 from '../assets/images/png/sliderCar5.png'
import topLayerSlider from '../assets/images/png/slider-top-layer.png'
import teamTopLayer from '../assets/images/png/team-top-layer.png'
import { LeftArrow } from '../components/Icons'
import { RightArrow } from '../components/Icons'

function Slider() {
    return (
        <div className='bg_orange position-relative'>
            <img className='w-100 mt_1' src={topLayerSlider} alt="topLayerSlider" />
            <span className='Slider_ArrowBox d-lg-flex justify-content-center align-items-center btn-next position-absolute pos_leftArrow d-none'>
                <LeftArrow />
            </span>
            <span className='Slider_ArrowBox d-lg-flex justify-content-center align-items-center btn-prev position-absolute pos_rightArrow d-none'>
                <RightArrow />
            </span>
            <div className='container'>
                <h3 className='ff_titling fw-bold text48_2xl lh_lg_57 lh_39 color_white text-center pb-lg-5 pb-4 mb-lg-2 mb-0'>See Our Latest Work</h3>
                <Swiper className='mb-lg-5 pb-lg-2 pb-0 mb-0'
                    slidesPerView={2.5}
                    spaceBetween={0}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    effect={'coverflow'}
                    navigation={{ nextEl: ".btn-next", prevEl: ".btn-prev" }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 100,
                        depth: 150,
                        modifier: 2,
                        slideShadows: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        992: {
                            slidesPerView: 2.5,
                            spaceBetween: 0,
                        },
                    }}>
                    <div className='swiper-wrapper'>
                        <SwiperSlide className='slider-car'>
                            <div><img src={sliderImg1} alt="sliderImg1" /></div>
                        </SwiperSlide>
                        <SwiperSlide className='slider-car'>
                            <div><img src={sliderImg2} alt="sliderImg2" /></div>
                        </SwiperSlide>
                        <SwiperSlide className='slider-car'>
                            <div><img src={sliderImg3} alt="sliderImg3" /></div>
                        </SwiperSlide>
                        <SwiperSlide className='slider-car'>
                            <div><img src={sliderImg4} alt="sliderImg4" /></div>
                        </SwiperSlide>
                        <SwiperSlide className='slider-car'>
                            <div><img src={sliderImg5} alt="sliderImg5" /></div>
                        </SwiperSlide>
                    </div>
                </Swiper >
            </div >
            <img className='w-100 mb_1' src={teamTopLayer} alt="teamTopLayer" />
        </div>
    )
}

export default Slider