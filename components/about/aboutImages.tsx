import {FC} from "react";
import Image from "next/image";

const AboutImages:FC<{images : string[]}> = ({images}) => {
    return(
        <div className="flex gap-[18px] justify-center mt-[70px] items-end md:flex-grow md:max-w-[45%]">
            {images.map((item,index) => (
                <div key={index} className="max-w-[300px] max-h-[500px] w-full h-full">
                    <Image src={item}
                           className={`w-full h-full object-cover ${index !== 0 ? '-translate-y-[50px] lg:-translate-y-[87px]' : ''}`}
                           alt={`about-image-${index}`}
                           width={185}
                           height={280}/>
                </div>
            ))}
        </div>
    )
}
export default AboutImages