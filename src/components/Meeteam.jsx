import React from 'react'
import TeamImg from '../assets/images/png/teamImg.png'
import teamTopLayer from '../assets/images/png/team-top-layer.png'

function Meeteam() {
    return (
        <div>
            <img className='w-100' src={teamTopLayer} alt="teamTopLayer" />
            <div className="container">
                <div className="row align-items-center mt_128 mt_140">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img className='max_w_md_461 max_W_300 w-100 mt-md-0 mt-5 pt-sm-0 pt-3' src={TeamImg} alt="TeamImg" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className='ff_titling fw-bold text48_2xl lh_lg_57 lh_39 color_blue mb-2'>Meet The Team</h2>
                        <p className='ff_acmin fw-bold text18_sm lh_21 color_blue mb-lg-3 mb-2'>Oxfordshire's Dry Ice Car Cleaning Specialists</p>
                        <p className='ff_acmin fw-normal text16_xs lh_24 color_blue opacity_70 max_w_613'>We’re shaking up the car cleaning scene with Dry Ice Blasting. From our buzzing unit in Oxfordshire, we're not just a team - we’re a Crew of car enthusiasts, expert restorers, and skilled mechanics united by our love for cars. We treat every car like it’s our own, driven by a philosophy that doing the right thing for your ride is the only way to go. When you hand over your keys to us, you're entrusting your pride and joy to fellow car lovers who understand that every car deserves precision care and a touch of cool.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meeteam