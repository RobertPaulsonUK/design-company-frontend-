import {FC} from "react";
import {MenuItem} from "@/utils/types/menu.interface";
import FooterMenuItem from "@/components/footer/footerMenuItem";

const FooterMenu:FC<{menuItems : MenuItem[]}> = ({menuItems}) => {
    return(
        <nav className={"w-[25%] lg:w-[auto] lg:mt-0 lg:px-[20px]"}>
            <ul className={"flex flex-col gap-[25px] items-start"}>
                {menuItems.map((item,index) => (
                    <FooterMenuItem item={item} key={index}/>
                ))}
            </ul>
        </nav>
    )
}
export default FooterMenu