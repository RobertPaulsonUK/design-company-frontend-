export interface HomeInterface {
    intro : IntroInterface
    service : ServiceInterface
}
export interface IntroInterface {
    title : string
    subtitle : string
    description : string
    imageSrc : string
}
export interface ServiceInterface {
    title : string
    subtitle : string
    items : ServiceItem[]
}
export interface ServiceItem {
    title : string
    description : string
    imageSrc : string
}