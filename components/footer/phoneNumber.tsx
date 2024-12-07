import {FC} from "react";
import Link from "next/link";

const PhoneNumber:FC<{number : string}> = ({number}) => {
    const formattedNumber = number.replace(/-/g,'')
    return(
        <Link href={`tel:${formattedNumber}`} className={"text-sm text-[#ABAEB7]"}>
            {number}
        </Link>
    )
}
export default PhoneNumber