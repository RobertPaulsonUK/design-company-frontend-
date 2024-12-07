import {FC} from "react";
import Link from "next/link";
import {MenuItem} from "@/utils/types/menu.interface";

const FooterMenuItem:FC<{item : MenuItem}> = ({item}) => {
    return(
        <li>
            <Link href={item.url} className={"text-[16px] leading-[16px] text-[#ABAEB7] font-medium transition duration-[300ms] ease-in-out hover:text-[#FFB077]"}>
                {item.title}
            </Link>
        </li>
    )
}
export default FooterMenuItem