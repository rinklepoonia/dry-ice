import React from 'react'
import blastBottomLayer from '../assets/images/png/blast-bottom-layer.png'

function Blast() {
    return (
        <div>
            <div className="container neg_margin">
                <h2 className='ff_titling fw-bold text48_2xl lh_lg_57 lh_39 color_blue text-center mb-md-3 mb-2'>Blast The Grime and Bring Back The Prime</h2>
                <p className='ff_acmin fw-normal text16_xs lh_24 color_blue opacity_70 text-center max_w_966 mx-auto mb-md-3 mb-1'>Rest easy knowing that our approach is tailored to protect and enhance your vehicle. We don’t clean; we care. Every treatment is a promise that your vehicle will not only look its best but also receive the care it needs for a longer, healthier life on the road.</p>
                <p className='ff_acmin fw-bold text16_xs lh_19 color_blue text-center mb-md-4 mb-3 pb-lg-3 pb-0'>Ready For a Transformation? Get an Instant Quote</p>
                <div className='text-center position-relative z-1'><button className='ff_acmin fw-bold text16_xs lh_19 color_white btn_property btn_hover transition'>Get Instant Quote</button></div>
            </div>
            <img className='w-100' src={blastBottomLayer} alt="blastBottomLayer" />
        </div>
    )
}

export default Blast