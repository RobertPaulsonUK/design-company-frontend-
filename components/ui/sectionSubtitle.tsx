import {FC} from "react";

interface Props {
    text : string
    dopClassname? : string
}
const SectionSubtitle:FC<Props> = ({text,dopClassname}) => {
    return(
        <h4 className={`text-base leading-normal uppercase font-normal text-[#FFC978] tracking-[4.8px] ${dopClassname ?? ''}`}>
            {text}
        </h4>
    )
}
export default SectionSubtitle