import {FC} from "react";
import {MenuItem} from "@/utils/types/menu.interface";
import MenuNavItem from "@/components/header/menuItem";
import HeaderButton from "@/components/buttons/headerButton";
interface Props {
    menuItems : MenuItem[],
    isOpen : boolean
    closeHandler : () => void
}
const MobileMenu:FC<Props> =
    ({menuItems,isOpen,closeHandler}) => {
    return(
        <nav className={`flex lg:hidden fixed z-[100] right-0 top-0 bottom-0 w-full items-center justify-center bg-[#0B0E17] transition-all duration-[300ms] easy-in-out ${isOpen ? 'translate-x-0' : 'translate-x-[100%]'}`}>
            <ul className={"flex flex-col items-center gap-[30px] xl:gap-[35px]"}>
                {menuItems.map((item,index) => (
                    <MenuNavItem key={index} item={item} isMobile={true} closeHandler={closeHandler}/>
                ))}
                <li>
                    <HeaderButton isMobile={true} closeHandler={closeHandler}/>
                </li>
            </ul>
        </nav>
    )
}
export default MobileMenu