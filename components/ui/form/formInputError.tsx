import {FC} from "react";

const FormInputError:FC<{text : any}> = ({text}) => {
    return(
        <div className={"text-base text-center font-medium text-[#F91600]"}>
            {text}
        </div>
    )
}
export default FormInputError