import {FC} from "react";
import {ServiceInterface} from "@/utils/types/home.interface";
import SectionSubtitle from "@/components/ui/sectionSubtitle";
import SectionTitle from "@/components/ui/sectionTitle";
import SpecialisationWrapper from "@/components/specialisation/specialisationWrapper";

interface Props {
    data : ServiceInterface
}
const Specialisation:FC<Props> = ({data})=> {
    return(
        <section className="relative py-[50px] md:py-[140px]">
            <div className="container">
                <SectionSubtitle text={data.subtitle} dopClassname={"text-left md:text-center"}/>
                <SectionTitle text={data.title} dopClassname={"text-left md:text-center"}/>
                <SpecialisationWrapper serviceItems={data.items}/>
            </div>
        </section>
    )
}
export default Specialisation