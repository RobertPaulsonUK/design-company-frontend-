"use client"
import {FC} from "react";
import {MenuItem} from "@/utils/types/menu.interface";
import Link from "next/link";
interface Props {
    item : MenuItem,
    isMobile? : boolean
    closeHandler? : () => void
}
const MenuNavItem:FC<Props> = (
    {item,isMobile,closeHandler}
) => {
    const clickHandler = () => {
        const target = document.querySelector(item.url)
        if(isMobile && closeHandler) {
            closeHandler()
        }
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }
    return(
        <li>
           <Link href={item.url}
                 onClick={(e) => {
                     e.preventDefault()
                     clickHandler()
                 }}
                 className={`relative text-[16px] leading-[16px] text-[${isMobile ? '#FFC978' : '#ABAEB7'}] font-medium uppercase transition duration-[300ms] ease-in-out group hover:text-[#FFB077] whitespace-nowrap`}>
               {item.title}
               <span className={"block rounded absolute left-[50%] bottom-[-5px] h-[1px] bg-[#FFB077] w-[0px] translate-x-[-50%] transition-all duration-[300ms] ease-in-out group-hover:w-full"}></span>
           </Link>
        </li>
    )
}
export default MenuNavItem