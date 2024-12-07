import {FC} from "react";
import {IntroInterface} from "@/utils/types/home.interface";
import IntroImage from "@/components/intro/introImage";
import IntroContent from "@/components/intro/introContent";

const Intro:FC<{data : IntroInterface}> = ({data}) => {
    return(
        <section className={"px-[16px] lg:pr-0 xxl:pl-[100px]"}>
            <div className="flex flex-col gap-y-[60px] items-center pt-[150px] lg:flex-row lg:items-stretch lg:pt-0">
                <IntroContent title={data.title}
                              subtitle={data.subtitle} description={data.description}/>
                <IntroImage imageSrc={data.imageSrc}/>
            </div>
        </section>
    )
}
export default Intro