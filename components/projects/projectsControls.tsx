import {FC} from "react";
import {ProjectItemInterface} from "@/utils/types/home.interface";
import ProjectControl from "@/components/projects/projectControl";

interface Props {
    projects : ProjectItemInterface[]
    activeControl : number | null
    clickHandler: (arg: null | number) => void
}
const ProjectsControls:FC<Props> = ({projects,activeControl,clickHandler}) => {
   const projectCategories = projects.map(({ category }) => ({
       title: category.title,
       id: category.id,
   })).filter((category, index, self) =>
       index === self.findIndex((c) => c.id === category.id)
   ).sort((a, b) => a.title.localeCompare(b.title));
    return(
        <div className="flex gap-[15px] xsm:gap-[25px] items-center mt-[30px]
        lg:justify-end lg:gap-[30px]">
            <ProjectControl title={"All"}
                            id={null}
                            activeControl={activeControl}
                            clickHandler={clickHandler}/>
            {projectCategories.map(
                (item,index) => (
                    <ProjectControl key={index}
                                    title={item.title}
                                    id={item.id}
                                    activeControl={activeControl}
                                    clickHandler={clickHandler}/>
                )
            )}
        </div>
    )
}
export default ProjectsControls