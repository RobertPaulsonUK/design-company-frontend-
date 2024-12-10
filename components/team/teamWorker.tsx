"use client"
import {FC} from "react";
import {TeamWorkerInterface} from "@/utils/types/home.interface";

interface Props {
    worker : TeamWorkerInterface
    clickHandler : (index : number | null) => void
    activeIndex : number | null
}
const TeamWorker:FC<Props> = ({worker,clickHandler,activeIndex}) => {
    return(
        <div className={`py-[20px] text-left text-normal font-medium uppercase border-b cursor-pointer ${activeIndex && (activeIndex === worker.order) ? 'text-[#FFC978] border-[#FFC978]' : 'text-white border-[#ABAEB74D]'}`}
            onClick={() => {
                clickHandler(worker.order)
            }}
        >
            {worker.name} - {worker.position}
        </div>
    )
}
export default TeamWorker