import {FC} from "react";
import Image from "next/image";

const introImage:FC<{imageSrc : string}> = ({imageSrc}) => {
    return(
        <div className={"w-full lg:grow  lg:max-w-[50%] lg:h-[100vh] relative z-[1]"}>
            <Image src={imageSrc}
                   alt={'intro-image'}
                   width={428} height={402}
                   className={"w-full h-full object-cover"}/>
        </div>
    )
}
export default introImage