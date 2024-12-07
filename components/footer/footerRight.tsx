import {FC} from "react";
import {FooterRightTextInterface} from "@/utils/types/footer.interface";
import PhoneNumber from "@/components/footer/phoneNumber";

const FooterRight:FC<{rightItems : FooterRightTextInterface}> = ({rightItems}) => {
    return(
        <div className={"[w-70%] lg:w-[auto] lg:pl-[100px] relative"}>
            <h2 className={"text-white text-[48px] leading-[50px] font-normal"}>
                {rightItems.address.title}
            </h2>
            <p className={"mt-[5px] max-w-[270px]"}>
                {rightItems.address.text}
            </p>
            <h2 className={"text-white text-[48px] leading-[50px] font-normal mt-[70px] lg:mt-[30px]"}>
                {rightItems.phone.title}
            </h2>
            <PhoneNumber number={rightItems.phone.number}/>
            <span className="hidden absolute lg:block w-[1px] h-full left-0 top-[50%] translate-y-[-50%] custom-background"/>
        </div>
    )
}
export default FooterRight