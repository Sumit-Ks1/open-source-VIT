import features from "./features.module.css"
import { IoIosHome } from 'react-icons/io'
import { BsCalendar2EventFill } from "react-icons/bs";
import { GrAchievement } from "react-icons/gr";
import { RiLoginBoxFill } from "react-icons/ri";

export  function Home() {
  return (
    <div className={`${features.elementcontainer } ${features.elementcontainer2}`}>
      <IoIosHome size='2em' className={features.iconsimport}/>
      <div className={features.featureelement}>
        Home
      </div>
    </div>
  )
}

export  function Events() {
  return (
    <div className={`${features.elementcontainer } ${features.elementcontainer2}`}>
      <BsCalendar2EventFill size='2em' className={features.iconsimport}/>
      <div className={features.featureelement}>
        Events
      </div>
    </div>
  )
}

export  function Contribute_to_Open_source() {
  return (
    <div className={`${features.elementcontainer } ${features.elementcontainer2}`}>
      <GrAchievement size='2em' className={features.iconsimport}/>
      <div className={features.featureelement}>
        Contributions
      </div>
    </div>
  )
}
export  function Login() {
  return (
    <div className={features.elementcontainer} id={features.loginpart}>
      <RiLoginBoxFill  size='2em' className={features.iconsimport}/>
      <div className={features.featureelement}>
        login
      </div>
    </div>
  )
}

