import Header from "./components/header/Header.jsx"
import Mainbody from "./components/body/Mainbody.jsx"
import Introreso from "./components/IntroAndResource/Introreso.jsx"
import TeamMembers from "./components/teamMembers/TeamMembers.jsx"


export default function App() {
  return (
    <div style={{width:"100%" ,display: 'flex', flexDirection:"column",justifyContent: "center",alignItems:"center"}}>
      <Header />
      <Mainbody/>
      <Introreso/>
      <TeamMembers/>
    </div>
  )

}
