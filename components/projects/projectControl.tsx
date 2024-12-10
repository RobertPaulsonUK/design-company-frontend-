"use client"
import {FC} from "react";

interface Props {
    title : string
    id : number | null
    activeControl : null | number
    clickHandler : (arg: number | null) => void
}
const ProjectControl:FC<Props>
    = ({title,id,clickHandler,activeControl}) =>
{
    return(
        <button className={`relative text-sm xsm:text-base lg:text-lg
        p-0 border-0 text-[#ABAEB7] font-semibold transition duration-[300ms] ease-in-out  ${activeControl === id ? 'text-[#FFB076]' : ''}`}
            onClick={() => {
                clickHandler(id)
            }}
        >
            {title}
            <span className={`block rounded absolute left-[50%] bottom-[-5px] h-[1px] bg-[#FFB077] w-[0px] translate-x-[-50%] transition-all duration-[300ms] ease-in-out ${activeControl === id ? 'w-full' : ''}`}></span>
        </button>
    )
}
export default ProjectControl