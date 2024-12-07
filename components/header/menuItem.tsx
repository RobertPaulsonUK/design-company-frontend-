import {FC} from "react";
import {MenuItem} from "@/utils/types/menu.interface";
import Link from "next/link";

const MenuNavItem:FC<{item : MenuItem,isMobile? : boolean}> = ({item,isMobile}) => {
    return(
        <li>
           <Link href={item.url}
                 className={`relative text-[16px] leading-[16px] text-[${isMobile ? '#FFC978' : '#ABAEB7'}] font-medium uppercase transition duration-[300ms] ease-in-out group hover:text-[#FFB077] whitespace-nowrap`}>
               {item.title}
               <span className={"block rounded absolute left-[50%] bottom-[-5px] h-[1px] bg-[#FFB077] w-[0px] translate-x-[-50%] transition-all duration-[300ms] ease-in-out group-hover:w-full"}></span>
           </Link>
        </li>
    )
}
export default MenuNavItem