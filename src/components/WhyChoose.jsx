import React from 'react'
import car1 from '../assets/images/png/whyChoose1.png'
import car2 from '../assets/images/png/whyChoose2.png'
import car3 from '../assets/images/png/whyChoose3.png'
import car4 from '../assets/images/png/whyChoose4.png'
import whyChooseImg from '../assets/images/png/whyChoose-Img.png'



function WhyChoose() {
    return (
        <div id='servise' className='bg_white position-relative mt_sm_60 mt_39'>
            <div className="container">
                <h2 className='ff_titling fw-bold text48_2xl lh_lg_57 lh_39 color_blue text-center mb-lg-5 mb-3'>Why Choose Dry Ice Blasting for Your Car?</h2>
                <div className="row flex-lg-row flex-column-reverse align-items-center mb_xl_121 mb_lg_50">
                    <div className="col-lg-6 mt-lg-0 mt-4">
                        <div className='d-flex align-items-lg-center align-items-start gap-3 mb-sm-4 mb-3 pb-lg-1 pb-0'>
                            <img className='max_w_70' src={car1} alt="car1" />
                            <div className='blank'>
                                <p className='ff_acmin fw-bold text16_xs lh_24 color_blue mb-1'>Effective Cleaning</p>
                                <p className='ff_acmin fw-normal text16_xs lh_24 color_blue opacity_70 mb-0 max_w_451'>The sublimation process effectively removes dirt, oil, and grime, even in hard-to-reach areas.</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-lg-center align-items-start gap-3 mb-sm-4 mb-3 pb-lg-1 pb-0'>
                            <img className='max_w_70' src={car2} alt="car2" />
                            <div className='blank'>
                                <p className='ff_acmin fw-bold text16_xs lh_24 color_blue mb-1'>Non-Abrasive</p>
                                <p className='ff_acmin fw-normal text16_xs lh_24 color_blue opacity_70 mb-0 max_w_451'>Unlike sandblasting or chemical cleaning, dry ice blasting won’t damage your car’s components or paint.</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-lg-center align-items-start gap-3 mb-sm-4 mb-3 pb-lg-1 pb-0'>
                            <img className='max_w_70' src={car3} alt="car3" />
                            <div className='blank'>
                                <p className='ff_acmin fw-bold text16_xs lh_24 color_blue mb-1'>No Residue</p>
                                <p className='ff_acmin fw-normal text16_xs lh_24 color_blue opacity_70 mb-0 max_w_451'>Since dry ice sublimates, there’s no residual waste to clean up, making it an environmentally friendly option.</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-lg-center align-items-start gap-3 mb-sm-4 mb-3 pb-lg-1 pb-0'>
                            <img className='max_w_70' src={car4} alt="car4" />
                            <div className='blank'>
                                <p className='ff_acmin fw-bold text16_xs lh_24 color_blue mb-1'>Safe for Various Materials</p>
                                <p className='ff_acmin fw-normal text16_xs lh_24 color_blue opacity_70 mb-0 max_w_451'>It’s safe for use on metals, plastics, rubbers, fabrics and more, ensuring comprehensive cleaning without damage.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img className='max_w_558 max_w_sm_400 max_w_280 w-100' src={whyChooseImg} alt="whyChooseImg" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhyChoose