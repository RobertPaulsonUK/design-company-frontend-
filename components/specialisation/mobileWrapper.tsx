"use client"
import {FC} from "react";
import Slider from "react-slick";
import ServiceElement from "@/components/specialisation/serviceItem";
import {ServiceItem} from "@/utils/types/home.interface";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ".//serviceSlider.scss"

const MobileWrapper:FC<{items : ServiceItem[]}> = ({items}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return(
        <div className={"slider-container service-slider"}>
            <Slider {...settings}>
                {items.map(
                    (item,index) => (
                        <ServiceElement key={index} service={item}  order={index}/>
                    )
                )}
            </Slider>
        </div>
    )
}
export default MobileWrapper