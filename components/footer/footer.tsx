import {FC} from "react";
import Copyright from "@/components/footer/copyright";
import {FooterData} from "@/utils/data/footer.data";
import FooterRight from "@/components/footer/footerRight";
import FooterLeft from "@/components/footer/footerLeft";
import FooterMenu from "@/components/footer/footerMenu";

const Footer:FC = () => {
    const {
        leftText,
        menuItems,
        rightText,
        copyright
    } = FooterData
    return(
        <footer>
            <div className="container">
                <div className="flex gap-y-[60px] gap-x-[10px] md:gap-x-[20px] flex-wrap justify-between py-[35px] text-[#ABAEB7] text-lg font-normal md:justify-center lg:justify-between lg:gap-x-0 lg:py-[70px]">
                    <FooterLeft text={leftText}/>
                    <FooterMenu menuItems={menuItems}/>
                    <FooterRight rightItems={rightText}/>
                </div>
            </div>
            <Copyright text={copyright}/>
        </footer>
    )
}
export default Footer