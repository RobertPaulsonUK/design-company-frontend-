import {FC} from "react";
import {IntroInterface} from "@/utils/types/home.interface";
import MainButton from "@/components/buttons/mainButton";
import DecorWord from "@/components/intro/decorWord";
import StarDecor from "@/components/intro/starDecor";
import LineDecor from "@/components/intro/lineDecor";

interface Props extends Omit<IntroInterface, "imageSrc">{}
const IntroContent:FC<Props> = ({title,subtitle,description}) => {
    return(
        <div className={"relative z-[2] w-full lg:grow lg:h-auto lg:py-[150px] lg:max-w-[50%]"}>
            <div className={"text-[#FFC978] text-base font-normal relative z-[1]"}>
                {subtitle}
            </div>
            <h1 className={"mt-[30px] text-white text-[42px] uppercase leading-[54px] relative z-[1] sm:max-w-[80%] md:max-w-[600px] xl:max-w-[688px] xl:text-[74px] xl:leading-[84px] xxl:text-[84px] xxl:leading-[94px]"}>
                {title}
            </h1>
            <div className={"text-[#ABAEB7] text-[20px] leading-[31px] mt-[10px] font-normal relative z-[1] sm:max-w-[80%] md:max-w-[534px]"}>
                <p>{description}</p>
            </div>
            <MainButton classname={"mt-[30px]"}/>
            <DecorWord/>
            <StarDecor/>
            <LineDecor/>
        </div>
    )
}
export default IntroContent