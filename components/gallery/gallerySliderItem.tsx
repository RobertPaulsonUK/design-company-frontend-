import {FC} from "react";
import {GalleryItemInterface} from "@/utils/types/home.interface";
import Image from "next/image";

const GallerySliderItem:FC<{item : GalleryItemInterface}> = ({item}) => {
    return(
        <div>
            <Image src={item.src}
                   className="w-full h-full object-contain"
                   alt={`image-${item.order}`}
                   width={258}
                   data-lightboxjs="gallery"
                   quality={80}
                   height={350}/>
        </div>
    )
}
export default GallerySliderItem