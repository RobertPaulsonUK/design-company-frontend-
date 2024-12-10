import {FC} from "react";
import {ServiceItem} from "@/utils/types/home.interface";
import ServiceElement from "@/components/specialisation/serviceItem";

const DesktopWrapper:FC<{serviceItems : ServiceItem[]}> = (
    {serviceItems}
) => {
    return(
        <div className="mt-[52px] flex gap-[30px] justify-center md:flex-wrap lg:flex-nowrap">
            {serviceItems.map((item,index) => (
                <ServiceElement key={index}
                                service={item}
                                order={index}/>
            ))}
        </div>
    )
}
export default DesktopWrapper