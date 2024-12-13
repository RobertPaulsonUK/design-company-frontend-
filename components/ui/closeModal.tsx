import React, {FC} from "react";
import Link from "next/link";
import Image from "next/image";

const CloseModal:FC<{clickHandler : () => void}> = ({clickHandler}) => {
    return(
        <Link
            href={"#"}
            onClick={(e) => {
                e.preventDefault()
                clickHandler()
            }}
        >
            <Image
                className="modal__close absolute top-5 right-6 w-5 h-5 cursor-pointer"
                src={"/icons/close.svg"}
                alt={"close"}
                width={20}
                height={20}
            />
        </Link>
    )
}
export default CloseModal