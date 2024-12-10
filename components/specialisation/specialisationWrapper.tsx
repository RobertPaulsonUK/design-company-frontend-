"use client"
import {FC, useEffect, useState} from "react";
import {ServiceItem} from "@/utils/types/home.interface";
import DesktopWrapper from "@/components/specialisation/desktopWrapper";
import MobileWrapper from "@/components/specialisation/mobileWrapper";

const SpecialisationWrapper:FC<{serviceItems : ServiceItem[]}> = ({serviceItems}) => {
    const [isMobile,setIsMobile] = useState<boolean>(true)
    useEffect(() => {
        const windowWidth = window.innerWidth
        setIsMobile(windowWidth < 768)
    }, []);

    return(
        <>
            {isMobile ? <MobileWrapper items={serviceItems}/> : <DesktopWrapper serviceItems={serviceItems}/>}
        </>
    )
}
export default SpecialisationWrapper