"use client"
import {FC, useEffect, useState} from "react";
import {TeamWorkerInterface} from "@/utils/types/home.interface";
import TeamWorkers from "@/components/team/teamWorkers";
import TeamImageMobile from "@/components/team/teamImageMobile";
import logo from "@/components/logo";
import TeamImageDesktop from "@/components/team/teamImageDesktop";

interface Props {
    imageUrl : string
    workers : TeamWorkerInterface[]
}
const TeamWrapper:FC<Props> = ({imageUrl,workers}) => {
    const [activeIndex,setActiveIndex] = useState<null | number>(null)
    const [isMobile,setIsMobile] = useState<boolean>(true)
    const [allScrollDistance,setAllScrollDistance] = useState([0,200,400,650,800])
    const [scrollDistance,setScrollDistances] = useState<number>(allScrollDistance[2])
    const getCurrentScrollDistances = (width: number) => {
        const step = (1290 - width) / 4;
        return Array.from({ length: 5 }, (_, i) =>
            i === 4 ? 1000 : i * step
        );
    };
    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
        setActiveIndex(3)
        const currentDistances = getCurrentScrollDistances(window.innerWidth)
        setAllScrollDistance(currentDistances)
    }, []);
    useEffect(() => {
       if(activeIndex) {
           setScrollDistances(allScrollDistance[activeIndex - 1])
       } else {
           setScrollDistances(allScrollDistance[2])
       }
    }, [activeIndex]);

    const mobileClickHandler = (index : number) => {
        setActiveIndex(index)
        setScrollDistances(allScrollDistance[index - 1])
    }
    const desktopClickHandler = (index : number) => {
        if(index === activeIndex) {
            setActiveIndex(null)
        }
        else {
            setActiveIndex(index)
        }
    }

    return(
        <div className="mt-[30px] md:mt-[60px]">
            {isMobile ?
                <TeamImageMobile imageUrl={imageUrl}
                                         activeIndex={activeIndex}
                                         isMobile={isMobile}
                                         scrollDistance={scrollDistance}/>
                :
                <TeamImageDesktop imageUrl={imageUrl}
                                  activeIndex={activeIndex}
                                  workers={workers}/>
            }
            <TeamWorkers workers={workers} clickHandler={isMobile ? mobileClickHandler : desktopClickHandler} activeIndex={activeIndex}/>

        </div>
    )
}
export default TeamWrapper