import {FC} from "react";

interface Props {
    text : string
    dopClassname? : string
}
const SectionTitle:FC<Props> = ({text,dopClassname}) => {
    return(
        <h2 className={`text-4xl leading-normal uppercase font-normal text-white md:text-[60px] lg:-[84px] ${dopClassname ?? ''}`}>
            {text}
        </h2>
    )
}
export default SectionTitle