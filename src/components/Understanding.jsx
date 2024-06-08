import React from 'react'
import TopLayerImg from '../assets/images/png/understanding-top-layer.png'
import layerImg2 from '../assets/images/png/layer2.png'
import dryBlasting1 from '../assets/images/png/understanding1.png'
import dryBlasting2 from '../assets/images/png/understanding2.png'

function Understanding() {
    return (
        <div id='aboutUs'>
            <div className='bg_orange position-relative'>
                <img className='w-100 position-absolute pos_underlayer1' src={TopLayerImg} alt="TopLayerImg" />
                <div className='container'>
                    <h1 className='ff_titling fw-bold text48_2xl lh_37 color_white text-center py_xl_260_137 py_lg_190_120 py_sm_144_73 py_73_45 mb-0'>Understanding Dry Ice Blasting</h1>
                    {/* ==========row1======== */}
                    <div className='row flex-lg-row flex-column-reverse'>
                        <div className='col-lg-6 mt-lg-0 mt-sm-4 mt-3'>
                            <p className='ff_acmin fw-bold text24_2md lh_36 color_white mb-sm-1 mb-0'>What is Dry Ice Blasting?</p>
                            <p className='ff_acmin fw-normal text18_sm lh_sm_27 color_white opacity_90 max_w_588'>Dry ice blasting is an innovative cleaning technology that uses solid CO2 (carbon dioxide) pellets. These pellets are propelled at high speeds to clean surfaces. Unlike traditional cleaning methods, this process does not involve water or abrasive materials, making it incredibly safe and effective for delicate areas like engine bays, undercarriages, and even car interiors.</p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <div className='position_absolute pos_blasting1 end_0'>
                                <img className='w-100 max_w_xxl_728 max_w_sm_435 max_w_240' src={dryBlasting1} alt="dryBlasting1" />
                            </div>
                        </div>
                    </div>
                    {/* =======row2========= */}
                    <div className="row pb_lg_300">
                        <div className="col-lg-6 d-flex justify-content-center">
                            <div className='position_absolute pos_blasting2 start-0'>
                                <img className='w-100 max_w_xxl_641 max_w_sm_400 max_w_240' src={dryBlasting2} alt="dryBlasting2" /></div>
                        </div>
                        <div className='col-lg-6 mt_xl_293 mt_xl_175 mt_lg_100 mt_30'>
                            <p className='ff_acmin fw-bold text24_2md lh_36 color_white mb-sm-1 mb-0'>How Does Dry Ice Blasting Work?</p>
                            <p className='ff_acmin fw-normal text18_sm lh_27 color_white opacity_90 max_w_588'>The process begins with the dry ice pellets being accelerated in a jet of compressed air, similar to sandblasting but with a crucial difference. Upon contact with the surface, the dry ice pellets undergo sublimation - they turn directly from solid to gas without becoming liquid. This reaction creates a micro-explosion on the surface, lifting dirt and contaminants away.</p>
                        </div>
                    </div>
                </div>
                <img className='w-100' src={layerImg2} alt="layerImg2" />
            </div>
        </div>
    )
}

export default Understanding