import {FC} from "react";
import {MenuItem} from "@/utils/types/menu.interface";
import MenuNavItem from "@/components/header/menuItem";
const Menu:FC<{menuItems : MenuItem[]}> = ({menuItems}) => {
    return(
        <nav className={"hidden lg:block"}>
            <ul className={"flex items-center gap-[15px] xl:gap-[35px]"}>
                {menuItems.map((item,index) => (
                    <MenuNavItem key={index} item={item}/>
                ))}
            </ul>
        </nav>
    )
}
export default Menu