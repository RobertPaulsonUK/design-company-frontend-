"use client"
import {FC, useEffect, useState} from "react";
import RequestModal from "@/components/modal/requestModal";

const MainButton:FC<{classname? : string}> = ({classname}) => {
    const [isFormOpen,setIsFormOpen] = useState<boolean>(false)
    useEffect(() => {
        setIsFormOpen(false)
    }, []);

    const clickHandler = () => {
        document.querySelector('html').classList.toggle('scroll-lock')
        setIsFormOpen(!isFormOpen)
    }
    return(
        <>
            <button onClick={clickHandler}
                className={`${classname ?? ''} py-[20px] px-[35px] text-white border-white text-[16px] font-medium leading-[16px] uppercase border border-solid hover:text-[#FFB077] hover:border-[#FFB077] transition-all duration-[300ms]`}>
                Lets work together
            </button>
            {isFormOpen && <RequestModal closeHandler={clickHandler}/>}
        </>
    )
}
export default MainButton