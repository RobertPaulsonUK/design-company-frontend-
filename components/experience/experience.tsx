import {FC} from "react";
import {ExperienceInterface} from "@/utils/types/home.interface";
import ExperienceText from "@/components/experience/experienceText";
import ExperienceImage from "@/components/experience/experienceImage";

const Experience:FC<{data : ExperienceInterface}> = ({data}) => {
    return(
        <section className="py-[30px] bg-[#23262F]
        xl:bg-[transparent] xl:bg-[url('/experience/background.png')] xl:bg-right xl:bg-no-repeat xl:bg-cover
        xxl:py-[50px]">
            <div className="px-[16px] md:flex md:flex-row-reverse md:gap-[40px]
            xl:pr-[250px]
            xxl:gap-[140px] xxl:pr-[300px]">
                <ExperienceText data={data}/>
                <ExperienceImage/>
            </div>
        </section>
    )
}
export default Experience