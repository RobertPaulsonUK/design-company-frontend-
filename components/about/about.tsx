import {FC} from "react";
import {AboutInterface} from "@/utils/types/home.interface";
import SectionTitle from "@/components/ui/sectionTitle";
import AboutImages from "@/components/about/aboutImages";
import AboutBottom from "@/components/about/aboutBottom";
import "./about.scss";
import AboutDecor from "@/components/about/aboutDecor";
import AboutWordDecor from "@/components/about/aboutWordDecor";

interface Props {
    data : AboutInterface
}
const About:FC<Props> = ({data}) => {
    return(
        <section id="about" className="py-[50px] md:py-[100px] lg:py-[140px] lg:pt-0 relative">
            <div className="container relative z-[1]">
                <div className="block md:flex md:justify-between md:items-center lg:items-stretch">
                    <div className="text-left md:max-w-[40%] lg:max-w-[45%]">
                        <SectionTitle text={data.title}/>
                        <p className="mt-[20px] text-[#ABAEB7] text-base
                        lg:p-[20px] lg:ml-[50px] lg:relative
                        xl:p-[30px] xl:ml-[80px]
                        ">
                            {data.description}
                            <span className="about-custom-before hidden lg:block"></span>
                        </p>
                        <div className="hidden md:block">
                            <AboutBottom data={data.bottom}/>
                        </div>
                    </div>
                    <AboutImages images={data.images}/>
                    <div className="block mt-[30px] mx-auto md:hidden">
                        <AboutBottom data={data.bottom}/>
                    </div>
                </div>
            </div>
            <AboutDecor/>
            <AboutWordDecor/>
        </section>
    )
}
export default About