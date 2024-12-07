import {FC} from "react";
import Logo from "@/components/logo";

const FooterLeft:FC<{text : string}> = ({text}) => {
    return(
        <div className={"relative grow w-full lg:pr-[100px] lg:grow-0 lg:w-auto md:flex md:flex-col md:justify-center md:items-center lg:block"}>
            <Logo height={50} width={138}/>
            <div className={"max-w-[350px] mt-[30px] lg:mt-[90px]"}>
                <p>{text}</p>
            </div>
            <span className="hidden absolute lg:block w-[1px] h-full right-0 top-[50%] translate-y-[-50%] custom-background"/>
        </div>
    )
}
export default FooterLeft