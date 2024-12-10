import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Intro from "@/components/intro/intro";
import {HomeData} from "@/utils/data/home.data";
import Specialisation from "@/components/specialisation/specialisation";
import About from "@/components/about/about";
import Projects from "@/components/projects/projects";
import Experience from "@/components/experience/experience";
import Team from "@/components/team/team";

export default function Home() {
    const {
        intro,service,about,projects,experience,team
    } = HomeData
  return (
    <div className={"wrapper relative z-[1] overflow-x-hidden"}>
        <Header/>
        <Intro data={intro}/>
        <Specialisation data={service}/>
        <About data={about}/>
        <Projects data={projects}/>
        <Experience data={experience}/>
        <Team data={team}/>
        <Footer/>
    </div>
  );
}
