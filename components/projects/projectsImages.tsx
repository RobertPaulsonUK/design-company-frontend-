import {FC} from "react";
import {ProjectItemInterface} from "@/utils/types/home.interface";
import ProjectImage from "@/components/projects/projectImage";

interface Props {
    items : ProjectItemInterface[]
    activeCategory : null | number
}
const ProjectsImages:FC<Props> = ({items,activeCategory}) => {
    return(
        <div className="mt-[30px] grid grid-cols-2 gap-x-[10px] gap-y-[20px]
        lg:grid-cols-4 xl:mt-[74px] xl:gap-x-[20px]">
            {items.map(
                (item,index) => (
                    <ProjectImage key={index}
                                  projectItem={item}
                                  activeCategory={activeCategory}
                                  index={index}/>
                ))}
        </div>
    )
}
export default ProjectsImages