import React from 'react'
import footerLocation from '../assets/images/svg/footer-location1.svg'
import footerMess from '../assets/images/svg/footer-mesage-2.svg'
import footerCall from '../assets/images/svg/footer-call3.svg'
import footertime from '../assets/images/svg/footer-time4.svg'
import footerLogo from '../assets/images/png/footer-logo.png'
import { InstaSvg } from '../components/Icons'
import { TikTokSvg } from '../components/Icons'
import { YouTubeSvg } from '../components/Icons'

function FooterSection() {
  return (
    <div id='contact' className='bg_blue'>
      <div className="container">
        <div className='d-flex align-items-center justify-content-between gap-4 pt_38_57 mb-md-0 mb-3 mt-md-0 pt-4 overflow-x-auto'>
          <div className='d-flex align-items-center gap-2'>
            <img src={footerLocation} alt="footerLocation" />
            <p className='ff_acmin fw-normal text16_xs lh_24 color_white opacity_70 mb-0 text-nowrap info_hover'>Crawley Mill Industrial Estate, Witney, Oxfordshire</p>
          </div>
          <div className='d-flex align-items-center gap-2'>
            <img src={footerMess} alt="footerMess" />
            <p className='ff_acmin fw-normal text16_xs lh_24 color_white opacity_70 mb-0 text-nowrap info_hover'>book@dryiceblastingpro.co.uk</p>
          </div>
          <div className='d-flex align-items-center gap-2'>
            <img src={footerCall} alt="footerCall" />
            <p className='ff_acmin fw-normal text16_xs lh_24 color_white opacity_70 mb-0 text-nowrap info_hover'>01865123456</p>
          </div>
          <div className='d-flex align-items-center gap-2'>
            <img src={footertime} alt="footertime" />
            <p className='ff_acmin fw-normal text16_xs lh_24 color_white opacity_70 mb-0 text-nowrap info_hover'>Mon - Fri: 9am to 5pm</p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-5">
            <a href=""><img className='max_w_85' src={footerLogo} alt="footerLogo" /></a>
            <p className='ff_acmin fw-normal text16_xs lh_25 color_white opacity_70 mt-2 max_w_350'>IceBlastPro is Oxfordshire's Dry Ice Car Cleaning specialists. Removing dirt and grime in hard to reach areas with a non-abrasive Dry Ice Blasting technique that requires no chemicals and leaves no mess.</p>
          </div>
          <div className="col-lg-7">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-6 d-flex justify-content-lg-center">
                <ul className='ps-0 mb-0'>
                  <li className='ff_acmin fw-bold text18_sm lh_27 color_white mb-md-3 mb-1'>Quick Link</li>
                  <li className='mb-2 pb-1'><a href="#aboutUs" className='ff_acmin fw-normal text16_xs lh_25 color_white opacity_70 underline'>About Us</a></li>
                  <li className='mb-2 pb-1'><a href="#servise" className='ff_acmin fw-normal text16_xs lh_25 color_white opacity_70 underline'>Services</a></li>
                  <li className='mb-2 pb-1'><a href="#blog" className='ff_acmin fw-normal text16_xs lh_25 color_white opacity_70 underline'>Blog</a></li>
                  <li className='mb-2 pb-1'><a href="#faq" className='ff_acmin fw-normal text16_xs lh_25 color_white opacity_70 underline'>FAQ’s</a></li>
                  <li className='mb-2 pb-1'><a href="#contact" className='ff_acmin fw-normal text16_xs lh_25 color_white opacity_70 underline'>Contact Us</a></li>
                </ul>
              </div>
              <div className="col-sm-4 col-6 d-flex justify-content-lg-center">
                <ul className='ps-0 mb-0'>
                  <li className='ff_acmin fw-bold text18_sm lh_27 color_white mb-md-3 mb-1'>Legal Information</li>
                  <li className='mb-2 pb-1'><a href="" className='ff_acmin fw-normal text16_xs lh_25 color_white opacity_70 underline'>Terms of Service</a></li>
                  <li className='mb-2 pb-1'><a href="" className='ff_acmin fw-normal text16_xs lh_25 color_white opacity_70 underline'>Privacy Policy</a></li>
                </ul>
              </div>
              <div className="col-sm-4 col-6 d-flex justify-content-lg-center mt-sm-0 mt-4">
                <ul className='mb-0 ps-0'>
                  <li className='ff_acmin fw-bold text18_sm lh_27 color_white mb-md-3 mb-1'>Follow us</li>

                  <a href="https://www.instagram.com/" target='_blank' className='d-flex align-items-center gap-2 mb-3 iconHover transition'>
                    <div className='IconBox d-flex justify-content-center align-items-center transition'>
                      <InstaSvg />
                    </div>
                    <li className='ff_Acmin fw-normal text16_xs lh_24 color_white opacity_70 mb-0 clr_change underline'>Instagram</li>
                  </a>
                  <a href="https://www.tiktok.com/foryou?lang=en" target='_blank' className='d-flex align-items-center gap-2 mb-3 iconhover transition'>
                    <div className='IconBox d-flex justify-content-center align-items-center transition'>
                      <TikTokSvg />
                    </div>
                    <li className='ff_Acmin fw-normal text16_xs lh_24 color_white opacity_70 mb-0 clr_change underline'>Tiktok</li>
                  </a>
                  <a href="https://www.tiktok.com/foryou?lang=en" target='_blank' className='d-flex align-items-center gap-2 mb-3 iconhover transition'>
                    <div className='IconBox d-flex justify-content-center align-items-center transition'>
                      <YouTubeSvg />
                    </div>
                    <li className='ff_Acmin fw-normal text16_xs lh_24 color_white opacity_70 mb-0 clr_change underline'>YouTube</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className='ff_acmin fw-normal text14_xxs lh_16 color_white opacity_70 pb-4 mb-0 text-center'>Copyright©2024(IceBlastPro) All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default FooterSection