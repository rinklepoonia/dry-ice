import React from 'react'
import tiksvg from '../assets/images/svg/future-tik-svg.svg'
import futureCleaning from '../assets/images/webp/future-cleaning-img.webp'
import playBtn from '../assets/images/webp/playbutton.webp'

function Future() {
    return (
      <div className="pt_lg_83 pt_40 future_bg_img bg_no_repate w-100">
        <div className="container">
          <div className="row flex-lg-row flex-column-reverse">
            <div data-aos="fade-right" className="col-lg-6 pt-lg-0 pt-4">
              <h2 className="ff_titling fw-bold text48_2xl lh_lg_57 lh_39 color_blue max_w_351 mb-lg-2 mb-1">
                The Future of<span className="d-lg-block"> Car Cleaning</span>
              </h2>
              <p className="ff_acmin fw-normal text16_xs lh_24 color_blue opacity_70 max_w_558 mb-lg-4 mb-md-3 mb-2">
                No need to be overwhelmed by the thought of harsh chemicals and
                abrasive cleaning methods. Our dry ice blasting leaves your car
                spotless, reaching where no cloth can.
              </p>
              <div className="d-flex align-items-start gap-3 mb-md-3 mb-2">
                <img src={tiksvg} alt="tiksvg" />
                <div className="blank">
                  <p className="ff_acmin fw-bold text16_xs lh_24 color_blue mb-md-1 mb-0">
                    Gentle Yet Powerful
                  </p>
                  <p className="ff_acmin fw-normal text16_xs lh_24 color_blue opacity_70 max_w_518 mb-0">
                    Our dry ice method lifts dirt effortlessly without the need
                    for harsh chemicals or abrasive techniques.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3 mb-md-3 mb-2">
                <img src={tiksvg} alt="tiksvg" />
                <div className="blank">
                  <p className="ff_acmin fw-bold text16_xs lh_24 color_blue mb-md-1 mb-0">
                    Precision Cleaning
                  </p>
                  <p className="ff_acmin fw-normal text16_xs lh_24 color_blue opacity_70 max_w_518 mb-0">
                    See how accurately we target the grunge zones, ensuring
                    every inch of your car's undercarriage and engine is
                    meticulously cleaned.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3 mb-md-3 mb-2">
                <img src={tiksvg} alt="tiksvg" />
                <div className="blank">
                  <p className="ff_acmin fw-bold text16_xs lh_24 color_blue mb-md-1 mb-0">
                    Safe for AlI Vehicles
                  </p>
                  <p className="ff_acmin fw-normal text16_xs lh_24 color_blue opacity_70 max_w_518 mb-0">
                    Perfect for all car types, from family hatchbacks to classic
                    cars and high-performance vehicles.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3 mb-md-3 mb-0 pb-lg-0 pb-sm-4 pb-3">
                <img src={tiksvg} alt="tiksvg" />
                <div className="blank">
                  <p className="ff_acmin fw-bold text16_xs lh_24 color_blue mb-md-1 mb-0">
                    Eco-Friendly Approach
                  </p>
                  <p className="ff_acmin fw-normal text16_xs lh_24 color_blue opacity_70 max_w_518 mb-0">
                    Notice the absence of water or chemical runoff, showcasing
                    our commitment to an environmentally responsible cleaning
                    process.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-lg-6 d-flex justify-content-center"
            >
              <a href="https://youtu.be/EM_FKck0DTo?feature=shared" target='_blank'>
                <div className="position-relative">
                  <img
                    className="max_w_558 max_w_sm_400 max_w_280 w-100 h-100 object-fit-contain"
                    src={futureCleaning}
                    alt="futureCleaning"/>
                  <div className="position-absolute pos_playbtn2">
                    <img
                      className="max_w_md_60 max_w_25 cursor_pointer"
                      src={playBtn}
                      alt="playBtn"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div>
            <p className="ff_acmin fw-bold text16_xs lh_24 color_blue text-center mt_lg_80 mb-md-4 mb-sm-3 mb-1">
              Like What You See? Get an Instant Quote
            </p>
            <div className="mx-auto text-center max_w_172 mb-3">
              <button className="ff_acmin fw-bold text16_xs lh_19 color_white btn_property btn_hover transition text-center">
                Get Instant Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );

}

export default Future