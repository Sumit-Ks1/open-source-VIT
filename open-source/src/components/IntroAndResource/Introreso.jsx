import Intro from "./Intro.jsx"
import introreso from "./introreso.module.css"
import Reso from "./Reso.jsx"

export default function Introreso() {
  return (
    <div className={introreso.mainbodyreso}>
      <Intro/>
      <Reso/>
    </div>
  )
}
