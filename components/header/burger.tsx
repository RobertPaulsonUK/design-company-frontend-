"use client"
import {FC, useEffect} from "react";
import Link from "next/link";

interface BurgerInterface {
    isOpen : boolean
    clickHandler : () => void
}
const Burger:FC<BurgerInterface> = ({isOpen,clickHandler}) => {
    useEffect(() => {
        const htmlDoc = document.querySelector('html')
        if(htmlDoc) {
            if (isOpen) {
                htmlDoc.classList.add('scroll-lock');
            } else {
                htmlDoc.classList.remove('scroll-lock');
            }
        }
    }, [isOpen]);
    return(
        <Link href={"#"}
              onClick={(e) => {
                  e.preventDefault()
                  clickHandler()
              }}
              className={`flex lg:hidden burger flex-col items-end ${isOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </Link>
    )
}
export default Burger