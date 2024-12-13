import {FC} from "react";
import {TeamDataInterface} from "@/utils/types/home.interface";
import SectionSubtitle from "@/components/ui/sectionSubtitle";
import SectionTitle from "@/components/ui/sectionTitle";
import TeamWrapper from "@/components/team/teamWrapper";

const Team:FC<{data : TeamDataInterface}> = ({data}) => {
    return(
        <section id="team" className="py-[50px] md:py-[100px] xl:py-[140px]">
            <div className="container">
                <SectionSubtitle text={data.subtitle}/>
                <SectionTitle text={data.title} dopClassname={"mt-[20px]"}/>
                <TeamWrapper imageUrl={data.imageUrl} workers={data.workers}/>
            </div>
        </section>
    )
}
export default Team