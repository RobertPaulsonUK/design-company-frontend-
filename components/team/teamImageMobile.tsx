"use client"
import {FC, useEffect, useRef} from "react";
import {TeamWorkerInterface} from "@/utils/types/home.interface";
import Image from "next/image";

interface Props {
    imageUrl : string
    activeIndex : null | number
    scrollDistance : number
}
const TeamImageMobile:FC<Props> = ({imageUrl,activeIndex,scrollDistance}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollToPosition = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft = scrollDistance;
        }
    };
    useEffect(() => {
        scrollToPosition()
    }, [scrollDistance]);
    return(
        <div className="overflow-x-hidden"
             ref={containerRef}
        >
            <Image src={imageUrl}
                   alt={"workers"}
                   width={1290}
                   height={650}
                   className={`max-w-[none] transition easy-in-out duration-300`}
            />
        </div>
    )
}
export default TeamImageMobile