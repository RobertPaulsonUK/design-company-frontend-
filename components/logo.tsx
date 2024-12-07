import {FC} from "react";
import Link from "next/link";
import Image from "next/image";

const Logo:FC<{height : number,width : number,isOpen? : boolean}> = ({height,width,isOpen}) => {
    return(
        <div className={"shrink-0"}>
            <Link href={'/'}>
                <Image src={isOpen ? '/logo-active.svg' : '/logo.svg'}
                       width={width}
                       height={height}
                       alt={"logo"}/>
            </Link>
        </div>
    )
}
export default Logo