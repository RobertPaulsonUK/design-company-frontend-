import {FC} from "react";
import {ExperienceInterface} from "@/utils/types/home.interface";
import SectionTitle from "@/components/ui/sectionTitle";
import ExperienceItem from "@/components/experience/experienceItem";
import MainButton from "@/components/buttons/mainButton";

const ExperienceText:FC<{data : ExperienceInterface}> = ({data}) => {
    return(
        <div>
            <SectionTitle text={data.title} dopClassname={"capitalize max-w-[600px]"}/>
            <div className="flex mt-[30px] gap-[20px] justify-between items-start
            sm:justify-start">
                {data.items.map(
                    (item,index) => (
                        <ExperienceItem key={index} item={item}/>
                    )
                )}
            </div>
            <MainButton classname={"mt-[30px]"}/>
        </div>
    )
}
export default ExperienceText