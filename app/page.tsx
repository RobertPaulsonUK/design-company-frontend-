import Image from "next/image";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Intro from "@/components/intro/intro";
import {HomeData} from "@/utils/data/home.data";

export default function Home() {
    const {intro} = HomeData
  return (
    <div className={"wrapper relative z-[1] overflow-x-hidden"}>
        <Header/>
        <Intro data={intro}/>
        <Footer/>
    </div>
  );
}
