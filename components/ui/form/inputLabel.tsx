import {FC} from "react";

interface Props {
    title : string
    inputId : string
}
const InputLabel:FC<Props> = ({title,inputId}) => {
    return(
        <label className="mb-[10px] block" form={inputId}>
            {title}
        </label>
    )
}
export default InputLabel