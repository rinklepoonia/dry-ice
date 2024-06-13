import React, { useState } from "react";
import { MinuIcon } from '../components/Icons'
import { PlusIcon } from '../components/Icons'

const App = () => {
    const [openAccordion, setOpenAccordion] = useState(null);
    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };
    const accordionData = [
        {
            title: "Engine Bay Perfection from £375 ",
            content:
                "Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. It's the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves.",
            color: "bg_acc1",
            maxWidth: "max_w_357",
             nowrap: "text_nowrap"
        },
        {
            title: "Underbelly Deep-Clean from £750",
            content: "Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. It's the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves.",
            color: "bg_acc2",
            nowrap: "text_nowrap"
        },
        {
            title: "Ultimate Undercarriage & Engine Bay Overhaul from £1,125",
            content: "Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. It's the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves.",
            color: "bg_acc3",
            nowrap: "text_nowrap"
        },
        {
            title: "Need Something Else?",
            content: "Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. It's the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves.",
            color: "bg_acc4",
        },
    ];
    return (
        <div className="container mt_100">
            < div id='pricing' className='bg_white mt_80' >
                <div className="container">
                    <h2 className='ff_titling fw-bold text48_2xl lh_lg_57 lh_39 color_blue mb-2 text-center mt-md-0 mt-sm-3 mt-5'>Let's Talk Numbers</h2>
                    <p className='ff_acmin fw-normal text16_xs lh_24 color_blue opacity_70 max_w_759 text-center mb-lg-5 mb-md-3 mb-2 mx-auto '>We're all about transparency, but we also know that each car tells a different story. The cost can vary based on how much grime we're up against. More dirt might mean more ice and more time to get that perfect finish. But don't sweat it – we'll always give you a straight price, customised to your car's needs.</p>

                </div>
            </div >
            <div id="a" className="accordion">
                {accordionData.map((item, index) => (
                    <div className={`accordion_item ${item.color} d-flex flex_column justify-content-between`} key={index} onClick={() => toggleAccordion(index)}>
                        <div className="d_flex justify_between">
                            <div
                                className={`accordion-title ${item.maxWidth} ${item.nowrap} ${openAccordion === index ? "open" : ""}  ff_acmin fw-bold text28_lg lh_lg_39 lh_28 color_blue`}>
                                {item.title}
                            </div>
                            <div className="d-lg-none d- block">
                                {openAccordion === index ? <MinuIcon /> : <PlusIcon />}
                            </div>
                        </div>
                        <div className="d-flex gap-3">
                            <div className={`accordion_content ff_acmin fw-normal text16_xs lh_25 color_blue opacity_70 ${openAccordion === index ? "open" : ""}`}>
                                {item.content}
                            </div>
                            <div className="d-lg-block d-none">
                                {openAccordion === index ? <MinuIcon /> : <PlusIcon />}
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
};
export default App;



