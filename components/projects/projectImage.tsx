import {FC} from "react";
import {ProjectItemInterface} from "@/utils/types/home.interface";
import Image from "next/image";

interface Props {
    projectItem : ProjectItemInterface
    activeCategory : null | number
    index : number
}
const ProjectImage:FC<Props> = (
    {projectItem,activeCategory,index}
) => {
    const currentCategory = projectItem.category.id,
        activeClass = 'pointer-events-auto grayscale-0',
        transformClass = (index + 1) % 2 === 0 ? 'translate-y-[30px] xl:translate-y-[50px]' : ''
    return(
        <div className={`relative pointer-events-none grayscale transition ${transformClass} ${(currentCategory === activeCategory) || (activeCategory === null) ? activeClass : ''}`}>
            <Image src={projectItem.imageUrl}
                   alt={`project-${index}`}
                   width={189}
                   height={280}
                   className={"w-full h-full object-cover"}/>
            <span className={`absolute opacity-[0.8] bg-black z-[5] top-0 right-0 bottom-0 left-0 ${(currentCategory === activeCategory) || (activeCategory === null) ? 'hidden' : 'block'}`}/>
        </div>
    )
}
export default ProjectImage