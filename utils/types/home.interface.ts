export interface HomeInterface {
    intro : IntroInterface
    service : ServiceInterface
    about : AboutInterface
    projects : ProjectsInterface
    experience : ExperienceInterface
    team : TeamDataInterface
    gallery : GalleryDataInterface
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
export interface AboutInterface {
    title : string
    description : string
    images: string[]
    bottom : AboutBottomInterface
}
export interface AboutBottomInterface {
    number : number
    text : string
    imageUrl : string
}
export interface ProjectsInterface {
    title : string
    subtitle : string
    items : ProjectItemInterface[]
}
export interface ProjectItemInterface {
    imageUrl : string
    category : {
        id : number
        title : string
    }
}
export interface ExperienceInterface {
    title : string
    items : ExperienceItemInterface[]
}
export interface ExperienceItemInterface {
    number : number
    title : string
}
export interface TeamDataInterface {
    title : string
    subtitle : string
    imageUrl : string
    workers : TeamWorkerInterface[]
}
export interface TeamWorkerInterface {
    name : string
    position : string
    order : number
}
export interface GalleryDataInterface {
    imageUrls : GalleryItemInterface[]
}
export interface GalleryItemInterface {
    order : number
    src : string
}
