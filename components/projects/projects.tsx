import {FC} from "react";
import {ProjectsInterface} from "@/utils/types/home.interface";
import SectionSubtitle from "@/components/ui/sectionSubtitle";
import SectionTitle from "@/components/ui/sectionTitle";
import ProjectsWrapper from "@/components/projects/projectsWrapper";

const Projects:FC<{data : ProjectsInterface}> = ({data}) => {
    return(
        <section className="pb-[50px] pt-[20px] xl:pb-[100px]">
        <div className="container">
            <div className="xl:translate-y-[90px]">
                <SectionSubtitle text={data.subtitle}/>
                <SectionTitle text={data.title} dopClassname={"mt-[20px]"}/>
            </div>
            <ProjectsWrapper projects={data.items}/>
        </div>
        </section>
    )
}
export default Projects