import features from "./features.module.css"
import { IoIosHome } from 'react-icons/io'
import { BsCalendar2EventFill } from "react-icons/bs";
import { GrAchievement } from "react-icons/gr";
import { RiLoginBoxFill } from "react-icons/ri";

export function Home() {
  return (
    <div className={`${features.elementcontainer} ${features.elementcontainer2}`}>
      <IoIosHome size='2.3em' className={features.iconsimport} />
      <div className={features.featureelement}>
        <h3 style={{ margin: "0%", padding: "0%" }}>
          Home
        </h3>
      </div>
    </div>
  )
}

export function Events() {
  return (
    <div className={`${features.elementcontainer} ${features.elementcontainer2}`}>
      <BsCalendar2EventFill size='2.3em' className={features.iconsimport} />
      <div className={features.featureelement}>
        <h3 style={{ margin: "0%", padding: "0%" }}>
          Events
        </h3>
      </div>
    </div>
  )
}

export function Contribute_to_Open_source() {
  return (
    <div className={`${features.elementcontainer} ${features.elementcontainer2}`}>
      <GrAchievement size='2.3em' className={features.iconsimport} />
      <div className={features.featureelement}>
        <h3 style={{ margin: "0%", padding: "0%" }}>
          Contributions
        </h3>
      </div>
    </div>
  )
}
export function Login() {
  return (
    <div className={features.elementcontainer} id={features.loginpart}>
      <RiLoginBoxFill size='2.3em' className={features.iconsimport} style={{ color: "red" }} />
      <div className={features.featureelement}>
        <h3 style={{ margin: "0%", padding: "0%" }}>
          login
        </h3>
      </div>
    </div>
  )
}

