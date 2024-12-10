"use client"
import {FC, useEffect, useState} from "react";
import {GalleryItemInterface} from "@/utils/types/home.interface";
import {initLightboxJS, SlideshowLightbox} from 'lightbox.js-react'
import Image from "next/image";


const GalleryLightbox:FC<{images : GalleryItemInterface[]}> = ({images}) => {
    const [activeImage,setActiveImage] = useState<null | number>(null)
    useEffect(() => {
        initLightboxJS("Insert License key", "Insert plan type here");
    });

    const hoverInitHandler = (index : number) => {
        setActiveImage(index)
    }
    const hoverExitHandler = () => {
        setActiveImage(null)
    }
    return(
        <div className="flex justify-center items-center px-[16px] py-[100px]">
            <SlideshowLightbox lightboxIdentifier="gallery"
                               framework="next"
                               theme="night"
                               fullScreen={true}
                               showThumbnails={true}
                               imgAnimation="fade"
                               lightboxImgClass={"gallery-image-wrapper"}
                               images={images}>
                <div className="flex items-center justify-center gap-[12px] lg:gap-[20px] xl:gap-[50px]">
                    {images.slice(0, 4).map((image, index) => (
                        <Image
                            onMouseEnter={() => {
                                hoverInitHandler(image.order)
                            }}
                            onMouseLeave={hoverExitHandler}
                            src={image.src}
                            key={index}
                            className={`transition-all duration-300 ease-in-out ${index === 0 || index === 3 ? '-translate-y-[25px] lg:-translate-y-[50px]' : ''}`}
                            alt={`image-${index + 1}`}
                            height={350}
                            width={258}
                            data-lightboxjs="gallery"
                            quality={80}
                            style={{filter : (activeImage !== null) && (activeImage !== image.order) ? 'grayscale(1)' : 'grayscale(0)'}}
                        />
                    ))}
                </div>
                <div className={"flex items-center justify-center " +
                    "mt-[25px] xl:mt-[50px] " +
                    "gap-[12px] lg:gap-[20px] xl:gap-[50px]"}>
                    {images.slice(4).map((image, index) => (
                        <Image
                            onMouseEnter={() => {
                                hoverInitHandler(image.order)
                            }}
                            onMouseLeave={hoverExitHandler}
                            src={image.src}
                            key={index}
                            className={`transition-all duration-300 ease-in-out ${index === 0 || index === 2 ? "translate-y-[25px] lg:translate-y-[50px]" : ""}`}
                            alt={`image-${index + 1}`}
                            height={350}
                            width={258}
                            data-lightboxjs="gallery"
                            quality={80}
                            style={{filter : (activeImage !== null) && (activeImage !== image.order) ? 'grayscale(1)' : 'grayscale(0)'}}
                        />
                    ))}
                </div>
            </SlideshowLightbox>
        </div>
    )
}
export default GalleryLightbox