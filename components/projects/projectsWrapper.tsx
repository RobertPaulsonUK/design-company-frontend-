"use client"
import {FC, useEffect, useState} from "react";
import {ProjectItemInterface} from "@/utils/types/home.interface";
import ProjectsControls from "@/components/projects/projectsControls";
import ProjectsImages from "@/components/projects/projectsImages";

interface Props {
    projects : ProjectItemInterface[]
}
const ProjectsWrapper:FC<Props> = ({projects}) => {
    const [activeCategory,setActiveCategory] = useState<null | number>(null)
    useEffect(() => {
        setActiveCategory(null)
    }, []);
    const clickHandler = (arg : null | number) => {
        setActiveCategory(arg)
    }
    return(
        <>
            <ProjectsControls projects={projects} activeControl={activeCategory} clickHandler={clickHandler}/>
            <ProjectsImages items={projects} activeCategory={activeCategory}/>
        </>
    )
}
export default ProjectsWrapper