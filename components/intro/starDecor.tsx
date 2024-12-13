import {FC} from "react";
import Image from "next/image";

const StarDecor:FC = () => {
    return(
        <div className="hidden lg:block absolute top-[100px] right-[50px] z-0
        xl:top-[150px] xl:right-[140px] pointer-events-none">
            <Image src={'/icons/star.svg'} alt={"star"} width={33} height={33} className="object-contain"/>
        </div>
    )
}
export default StarDecor