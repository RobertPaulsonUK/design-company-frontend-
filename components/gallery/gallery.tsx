"use client"
import {FC, useEffect, useState} from "react";
import {GalleryDataInterface} from "@/utils/types/home.interface";
import GalleryLightbox from "@/components/gallery/galleryLightbox";
import GallerySlider from "@/components/gallery/gallerySlider";

const Gallery:FC<GalleryDataInterface> = ({imageUrls}) => {
    const [isDesktopOrTablet,setIsDesktopOrTablet] = useState<boolean>(true)
    useEffect(() => {
        setIsDesktopOrTablet(window.innerWidth > 768)
    }, []);
    return(
        <section>
            {isDesktopOrTablet ?
                <GalleryLightbox images={imageUrls}/>
                :
                <GallerySlider images={imageUrls}/>
            }
        </section>
    )
}
export default Gallery