import React from 'react'
import minusBtn from '../assets/images/svg/-ve-btn.svg'

function LetsTalk() {
    const accordionHead = document.querySelectorAll(".accordionHead");
    accordionHead.forEach((e) => {
        e.addEventListener("click", () => {
            const activeAccordion = document.querySelector(".active")
            e.parentElement.classList.toggle("active")
            activeAccordion && activeAccordion.classList.remove("active")
        })
    });
    return (
        <div className='bg_white mt_80'>
            <div className="container">
                <h2 className='ff_titling fw-bold text48_2xl lh_lg_57 lh_39 color_blue mb-2 text-center'>Let's Talk Numbers</h2>
                <p className='ff_acmin fw-normal text16_xs lh_24 color_blue opacity_70 max_w_759 text-center mb-5 mx-auto '>We're all about transparency, but we also know that each car tells a different story. The cost can vary based on how much grime we're up against. More dirt might mean more ice and more time to get that perfect finish. But don't sweat it – we'll always give you a straight price, customised to your car's needs.</p>
                {/* <div class="accordion-box mx-auto">
                    <div class="accordion1 ">
                        <div class="accordionHead d-flex justify-content-between ">
                            <p class="group">Group-1</p>
                            <img class="arrowIcon" src={minusBtn} alt="minusBtn" />
                        </div>
                        <p class="accordionpara">Nibh dictum nulla morbi ornare. Varius sit at eget
                            nunc.
                            Nibh
                            dictum
                            nulla morbi ornare.
                            Varius sit at eget nunc. Nibh
                            dictum nulla morbi ornare. Varius sit at eget nunc.
                        </p>
                    </div>
                    <div class="accordion1 active">
                        <div class=" accordionHead d-flex justify-content-between ">
                            <p class="group">Group-1</p>
                            <img class="arrowIcon" src={minusBtn} alt="minusBtn" />
                        </div>
                        <div>
                            <p class="accordionpara">Nibh dictum nulla morbi ornare. Varius sit at eget
                                nunc.
                                Nibh
                                dictum
                                nulla morbi ornare.
                                Varius sit at eget nunc. Nibh
                                dictum nulla morbi ornare. Varius sit at eget nunc.</p>
                        </div>
                    </div>
                    <div class="accordion1">
                        <div class=" accordionHead d-flex justify-content-between ">
                            <p class="group">Group-1</p>
                            <img class="arrowIcon" src={minusBtn} alt="minusBtn" />

                        </div>
                        <div>
                            <p class="accordionpara">Nibh dictum nulla morbi ornare. Varius sit at eget
                                nunc.
                                Nibh
                                dictum
                                nulla morbi ornare.
                                Varius sit at eget nunc. Nibh
                                dictum nulla morbi ornare. Varius sit at eget nunc.</p>
                        </div>
                    </div>
                    <div class="accordion1">
                        <div class=" accordionHead d-flex justify-content-between ">
                            <p class="group">Group-1</p>
                            <img class="arrowIcon" src={minusBtn} alt="minusBtn" />
                        </div>
                        <div>
                            <p class="accordionpara">Nibh dictum nulla morbi ornare. Varius sit at eget
                                nunc.
                                Nibh
                                dictum
                                nulla morbi ornare.
                                Varius sit at eget nunc. Nibh
                                dictum nulla morbi ornare. Varius sit at eget nunc.</p>
                        </div>
                    </div>
                    <div class="accordion1">
                        <div class=" accordionHead d-flex justify-content-between ">
                            <p class="group">Group-1</p>
                            <img class="arrowIcon" src={minusBtn} alt="minusBtn" />
                        </div>
                        <div>
                            <p class="accordionpara">Nibh dictum nulla morbi ornare. Varius sit at eget
                                nunc.
                                Nibh
                                dictum
                                nulla morbi ornare.
                                Varius sit at eget nunc. Nibh
                                dictum nulla morbi ornare. Varius sit at eget nunc.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default LetsTalk