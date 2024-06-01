import React from 'react'
import TopLayerImg from '../assets/images/png/understanding-top-layer.png'
import layerImg2 from '../assets/images/png/layer2.png'
import dryBlasting1 from '../assets/images/png/understanding1.png'
import dryBlasting2 from '../assets/images/png/understanding2.png'

function Understanding() {
    return (
        <section>
            <div className='bg_orange position-relative'>
                <img className='w-100 position-absolute pos_underlayer1' src={TopLayerImg} alt="TopLayerImg" />
                <div className='container'>
                    <h1 className='ff_titling fw-bold text48_2xl lh_37 color_white text-center pb_137 pt_260 mb-0'>Understanding Dry Ice Blasting</h1>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <p className='ff_acmin fw-bold text24_2md lh_36 color_white mb-1'>What is Dry Ice Blasting?</p>
                            <p className='ff_acmin fw-normal text18_sm lh_27 color_white opacity_90 max_w_588'>Dry ice blasting is an innovative cleaning technology that uses solid CO2 (carbon dioxide) pellets. These pellets are propelled at high speeds to clean surfaces. Unlike traditional cleaning methods, this process does not involve water or abrasive materials, making it incredibly safe and effective for delicate areas like engine bays, undercarriages, and even car interiors.</p>
                        </div>
                    </div>
                    <div className='position-absolute pos_blasting1'><img className='w-100 max_w_728 opacity_30' src={dryBlasting1} alt="dryBlasting1" /></div>
                    <div className="row pb_300">
                        <div className='position-absolute pos_blasting2 start-0'>
                            <img className='w-100 max_w_641 opacity_30 mt_118' src={dryBlasting2} alt="dryBlasting2" /></div>
                        <div className="col-6">
                        </div>
                        <div className='col-lg-6 mt_365'>
                            <p className='ff_acmin fw-bold text24_2md lh_36 color_white mb-1'>How Does Dry Ice Blasting Work?</p>
                            <p className='ff_acmin fw-normal text18_sm lh_27 color_white opacity_90 max_w_588'>The process begins with the dry ice pellets being accelerated in a jet of compressed air, similar to sandblasting but with a crucial difference. Upon contact with the surface, the dry ice pellets undergo sublimation - they turn directly from solid to gas without becoming liquid. This reaction creates a micro-explosion on the surface, lifting dirt and contaminants away.</p>
                        </div>
                    </div>
                </div>
                <div className='position-abs olute top-0'><img className='w-100' src={layerImg2} alt="layerImg2" /></div>
            </div>

        </section>
    )
}

export default Understanding