import {FC} from "react";
import {ServiceItem} from "@/utils/types/home.interface";
import Image from "next/image";

interface Props {
    service : ServiceItem
    order : number
}
const ServiceElement:FC<Props> = ({service,order}) => {
    const translateClass = (order === 0) || (order === 3) ? 'lg:translate-y-[-70px] xl:translate-y-[-130px]' : ''
    return(
        <div className={`relative max-w-full md:max-w-[300px] max-h-[500px] w-full h-full z-[2] ${translateClass}`}>
            <div className={"w-full"}>
                <Image src={service.imageSrc}
                       alt={service.title}
                       width={300}
                       height={500}
                       className={"w-full max-w-full max-h-full object-cover"}/>
            </div>
            <div className="absolute z-[2]
            bottom-0 right-0 left-0
            p-[20px] md:p-[30px]
            text-white text-base leading-normal
            service-background"
            >
                <h4 className="text-2xl">
                    {service.title}
                </h4>
                <p className="mt-[10px]">
                    {service.description}
                </p>
            </div>
        </div>
    )
}
export default ServiceElement