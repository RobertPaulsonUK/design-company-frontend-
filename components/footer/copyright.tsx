import {FC} from "react";

const Copyright:FC<{text: string}> = ({text}) => {
    return(
        <div className="mx-[15px] py-[15px] flex items-center justify-center text-[#ABAEB7] text-[14px] font-light border-t-[1px] border-white ">
            <p>{text}</p>
        </div>
    )
}
export default Copyright