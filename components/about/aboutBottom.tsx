import {FC} from "react";
import {AboutBottomInterface} from "@/utils/types/home.interface";
import Image from "next/image";

const AboutBottom:FC<{data : AboutBottomInterface}>
    =
    ({data}) => {
    return(
        <div>
            <div className="flex gap-[30px] items-center">
                <div className="text-white text-[88px] leading-normal font-normal">
                    {data.number}
                    <span className="text-5xl">
                        %
                    </span>
                </div>
                <div className="text-[#ABAEB7] text-xl leading-normal max-w-[80px]">
                    {data.text}
                </div>
            </div>
            <div className="max-w-[405px] max-h-[175px]
            mt-[20px] mx-auto md:mt-[30px] md:mx-0">
                <Image src={data.imageUrl}
                       className="w-full h-full object-cover"
                       alt={"bottom-image"}
                       width={388}
                       height={175}/>
            </div>
        </div>
    )
}
export default AboutBottom