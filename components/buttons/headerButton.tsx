import {FC} from "react";

const HeaderButton:FC<{isMobile : boolean}> = ({isMobile}) => {
    const colorClass = isMobile ? 'text-[#FFC978] border-[#FFC978]' : 'text-white border-white'
    const displayClass = isMobile ? 'block lg:hidden' : 'hidden lg:block'
    return(
        <>
            <button className={`${displayClass} py-[15px] px-[30px] ${colorClass} text-[16px] font-medium leading-[16px] uppercase border border-solid hover:text-[#FFB077] hover:border-[#FFB077] transition-all duration-[300ms]`}>
                Contact
            </button>
        </>
    )
}
export default HeaderButton