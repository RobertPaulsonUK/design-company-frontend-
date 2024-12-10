import {FC} from "react";
import {ExperienceItemInterface} from "@/utils/types/home.interface";

const ExperienceItem:FC<{item : ExperienceItemInterface}> = ({item}) => {
    return(
        <div>
            <div className="text-[#FFC978] text-[44px] leading-[70px]">
                {item.number}
                <span className="text-[32px]">
                    %
                </span>
            </div>
            <div className="text-[#DFE9EB] text-base">
                {item.title}
            </div>
        </div>
    )
}
export default ExperienceItem