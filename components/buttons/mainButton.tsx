import {FC} from "react";

const MainButton:FC<{classname? : string}> = ({classname}) => {
    return(
        <>
            <button className={`${classname ?? ''} py-[20px] px-[35px] text-white border-white text-[16px] font-medium leading-[16px] uppercase border border-solid hover:text-[#FFB077] hover:border-[#FFB077] transition-all duration-[300ms]`}>
                Lets work together
            </button>
        </>
    )
}
export default MainButton