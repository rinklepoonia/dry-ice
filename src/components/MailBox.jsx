import React from "react";
import mailImg from "../assets/images/webp/mail-box-img.webp";

function MailBox() {
  return (
    <div className="pt_md_110 pt_60 mb_100">
      <div className="container">
        <div
          data-aos="fade-up"
          className="mailBox d-flex flex-column align-items-center position-relative mx-auto"
        >
          <div className="position-absolute pos_mailBox">
            <img
              className="w-100 max_w_md_80 max_w_55"
              src={mailImg}
              alt="mailImg"
            />
          </div>
          <h2 className="ff_titling fw-bold text48_2xl lh_lg_57 lh_39 color_white mb-2">
            Join Our Mailing List
          </h2>
          <p className="ff_acmin fw-normal text16_xs lh_24 color_white opacity_90 mb-lg-4 mb-2">
            Get news, videos and deals straight to your inbox.
          </p>
          <div className="d-flex justify-content-between input_modification mb-lg-4 mb-sm-3 mb-2">
            <input
              type="text"
              placeholder="Enter your email address "
              className="ff_acmin fw-normal text16_xs lh_22 color_blue opacity_80 outline_none border_none bg-transparent w-100"
            />
            <button className="ff_acmin fw-bold text16_xs lh_19 color_white btn_property max_w_121 w-100 transition btn_hover d-sm-block d-none">
              Subscribe
            </button>
          </div>
          <button className="ff_acmin fw-bold text16_xs lh_19 color_white btn_property max_w_121 w-100 transition btn_hover d-sm-none d-block mb-sm-0 mb-2">
            Subscribe
          </button>
          <label
            for="checkbox"
            class="check_label d-flex align-items-center gap-2"
          >
            <input type="checkbox" id="checkbox" name="checkbox" />
            <p class="ff_acmin fw-normal text16_xs lh_16 color_white opacity_90 mb-0">
              I consent to receive emails & confirm I have read the privacy
              policy.
            </p>
          </label>
        </div>
      </div>
    </div>
  );
}

export default MailBox;
