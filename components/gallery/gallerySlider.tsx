"use client"
import {FC} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {GalleryItemInterface} from "@/utils/types/home.interface";
import GallerySliderItem from "@/components/gallery/gallerySliderItem";
import "./gallery-styles.scss"
import {SlideshowLightbox} from "lightbox.js-react";

const GallerySlider:FC<{images : GalleryItemInterface[]}> = ({images}) => {
    const settings = {
        className: "center",
        dots: false,
        speed: 500,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "60px",
                    infinite: true,
                }
            }
        ]
    };
    return(
        <div className={"slider-container gallery-slider"}>
            <SlideshowLightbox lightboxIdentifier="gallery"
                               framework="next"
                               theme="night"
                               fullScreen={true}
                               showThumbnails={true}
                               imgAnimation="fade"
                               lightboxImgClass={"gallery-image-wrapper"}
                               images={images}>
                <Slider {...settings}>
                    {images.map(
                        (item,index) => (
                            <GallerySliderItem item={item} key={index}/>
                        )
                    )}
                </Slider>
            </SlideshowLightbox>
        </div>
    )
}
export default GallerySlider