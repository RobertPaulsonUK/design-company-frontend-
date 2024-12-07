"use client"
import {FC, useEffect, useState} from "react";
import Logo from "@/components/logo";
import Menu from "@/components/header/menu";
import {MenuData} from "@/utils/data/menu";
import HeaderButton from "@/components/buttons/headerButton";
import Burger from "@/components/header/burger";
import MobileMenu from "@/components/header/mobileMenu";

const Header:FC  = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false)
    useEffect(() => {
        setIsOpen(false)
    }, []);
    const menuHandler = () => {
        setIsOpen(!isOpen)
    }
    return(
        <header>
            <div className={"absolute top-0 right-0 left-0 px-[16px] py-[25px] flex items-center justify-between z-[1000] xxl:px-[100px]"}>
                <div className="max-w-[1720px] w-full mx-auto flex items-center justify-between">
                    <div className="max-w-[50%] w-full flex items-center gap-[20px] justify-between">
                        <Logo height={47} width={108} isOpen={isOpen}/>
                        <Menu menuItems={MenuData.menuItems}/>

                    </div>
                    <HeaderButton isMobile={false}></HeaderButton>
                    <Burger isOpen={isOpen} clickHandler={menuHandler}/>
                </div>
            </div>
            <MobileMenu menuItems={MenuData.menuItems} isOpen={isOpen}/>
        </header>
    )
}
export default Header