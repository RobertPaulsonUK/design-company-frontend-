import {FC} from "react";
import Image from "next/image";
import {TeamWorkerInterface} from "@/utils/types/home.interface";

interface Props {
    imageUrl : string
    activeIndex : number | null
    workers : TeamWorkerInterface[]
}
const TeamImageDesktop:FC<Props> = ({imageUrl,activeIndex,workers}) => {
    const overlayDistances = [
        {
            left : "0",
            right : "75%"
        },
        {
            left : "23%",
            right : "56%"
        },
        {
            left : "42%",
            right : "38%"
        },
        {
            left : "60%",
            right : "21%"
        },
        {
            left : "77%",
            right : "0"
        }
    ]
    return(
        <div className="w-full relative">
            <Image src={imageUrl}
                   alt={"workers"}
                   width={1290}
                   height={650}
                   className={"w-full h-full object-contain"}/>

            <span className={`block absolute top-0 bottom-0 z-[2] bg-[rgba(0,0,0,0.9)] pointer-events-none left-0 transition duration-300 ease-linear ${activeIndex === null ? 'hidden' : ''}`}
            style={{
                width : activeIndex ? overlayDistances[activeIndex - 1].left : 0
            }}/>
            <span className={`block absolute top-0 bottom-0 z-[2] bg-[rgba(0,0,0,0.9)] pointer-events-none right-0 transition duration-150 ease-linear ${activeIndex === null ? 'hidden' : ''}`}
            style={{
                width : activeIndex ? overlayDistances[activeIndex - 1].right : 0
            }}/>
        </div>
    )
}
export default TeamImageDesktop