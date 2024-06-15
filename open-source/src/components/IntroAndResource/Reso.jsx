import reso from './reso.module.css';
import Eventcard from './Eventcard.jsx';
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaCloud } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { SiOpencv } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { FaHackerrank } from "react-icons/fa";

export default function Reso() {



  return (
    <div className={reso.eventcontain}>
      <h1 className={reso.eventheading}>
        Events 😍
      </h1>
      <div className={reso.eventcardcontainer}>
        <Eventcard currentStatus="UPCOMING" eventName="Evolove with AI" image={<GiArtificialIntelligence size='8em'/>}  field="Artificial Intelligence" description="“Evolve with AI” is an immersive event showcasing the latest AI innovations, offering hands-on experiences, expert talks, and networking opportunities to shape the future of technology."/>
        <Eventcard currentStatus="UPCOMING" eventName="Open to Cloud" image={<FaCloud size='8em'/>} field="Cloud Computing" description="“Open to Cloud Computing” is an enlightening event focused on cloud technology advancements, fostering collaboration, innovation, and knowledge sharing among cloud computing professionals and enthusiasts."/>
        <Eventcard currentStatus="UPCOMING" eventName="Gamers Arena" image={<IoGameController size='8em'/>} field="Gaming Contest" description="You demanded , We Delieverd. Here we go with gaming contest for gamers . It's all about time, skill, and patience. Wait for gaming lists ....."/>
        <Eventcard currentStatus="UPCOMING" eventName="Contribute to Open CV" image={<SiOpencv size='8em'/>} field="Machine Learning" description="It is golden opportunity for ML enthusiasts , who were eagerly waiting to get an oppportunity so that they may contribute in Open CV....."/>
        <Eventcard currentStatus="UPCOMING" eventName="Time To Code" image={<CgWebsite size='8em'/>} field="Web Developer" description="“Open Source Contribution to Websites” is a dynamic event aimed at fostering community-driven development, encouraging contributions to web projects, and enhancing digital platforms collaboratively."/>
        <Eventcard currentStatus="UPCOMING" eventName="Hackathon" image={<FaHackerrank size='8em'/>} field="Open to all" description="Time to showcase all your skills to the outer world with more and more enthusiasm and fun."/>
      </div>
    </div>
  )
}
