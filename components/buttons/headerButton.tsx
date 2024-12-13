"use client"
import {FC, useEffect, useState} from "react";
import RequestModal from "@/components/modal/requestModal";

interface Props {
    isMobile : boolean
    closeHandler? : () => void
}
const HeaderButton:FC<Props> = ({isMobile,closeHandler}) => {
    const colorClass = isMobile ? 'text-[#FFC978] border-[#FFC978]' : 'text-white border-white'
    const displayClass = isMobile ? 'block lg:hidden' : 'hidden lg:block'
    const [isFormOpen,setIsFormOpen] = useState<boolean>(false)
    useEffect(() => {
        setIsFormOpen(false)
    }, []);
    const clickHandler = () => {
        if(!isMobile) {
            document.querySelector('html').classList.toggle('scroll-lock')
        }
        setIsFormOpen(!isFormOpen)
    }
    return(
        <>
            <button
                onClick={clickHandler}
                className={`${displayClass} py-[15px] px-[30px] ${colorClass} text-[16px] font-medium leading-[16px] uppercase border border-solid hover:text-[#FFB077] hover:border-[#FFB077] transition-all duration-[300ms]`}>
                Contact
            </button>
            {isFormOpen && <RequestModal closeHandler={clickHandler}/>}
        </>
    )
}
export default HeaderButton