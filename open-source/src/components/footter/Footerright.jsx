import Content from '../body/Content';
import footerright from './footerright.module.css';
export default function Footerright() {
  return (
    <div className={footerright.rightcontainer}>
        <div className={footerright.innercontainer}>
            <h3 style={{width: "fit-Content"}}>Website</h3>
            <h4 style={{width: "fit-Content"}}>Home</h4>
            <h4 style={{width: "fit-Content"}}>Contact Us</h4>
            <h4 style={{width: "fit-Content"}}>About</h4>
            <h4 style={{width: "fit-Content"}}>Creator</h4>
        </div>
        <div className={footerright.innercontainer}>
            <h3 style={{width: "fit-Content"}}>Contribution</h3>
            <h4 style={{width: "fit-Content"}}>Collaboration</h4>
            <h4 style={{width: "fit-Content"}}>Projects</h4>
            <h4 style={{width: "fit-Content"}}>Hackathons</h4>
            <h4 style={{width: "fit-Content"}}>Events</h4>
        </div>
        <div className={footerright.innercontainer}>
            <h4 style={{width: "fit-Content"}}>Terms and Conditions</h4>
            <h4 style={{width: "fit-Content"}}>Privacy Policy</h4>
            <h4 style={{width: "fit-Content"}}>Licenses</h4>
        </div>
    </div>
  )
}
