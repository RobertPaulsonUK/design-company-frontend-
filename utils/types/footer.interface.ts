import {MenuItem} from "@/utils/types/menu.interface";

export interface FooterDataInterface {
    leftText : string
    menuItems : MenuItem[]
    rightText : FooterRightTextInterface
    copyright : string
}
export interface FooterRightTextInterface {
    address : {
        title : string
        text : string
    }
    phone : {
        title : string
        number : string
    }
}