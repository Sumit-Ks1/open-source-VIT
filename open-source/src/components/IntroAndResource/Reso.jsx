import reso from './reso.module.css';
import Eventcard from './Eventcard.jsx';


export default function Reso() {



  return (
    <div classsName={reso.eventcontainer}>
      <h1 className={reso.eventheading}>
        Events
      </h1>
      <div className={reso.eventcardcontainer}>
        <Eventcard currentStatus="UPCOMING" eventName="Evolove with AI"  field="Artificial Intelligence" description="“Evolve with AI” is an immersive event showcasing the latest AI innovations, offering hands-on experiences, expert talks, and networking opportunities to shape the future of technology."/>
        {/* <Eventcard currentStatus="" eventName="" image={} field="" description=""/>
        <Eventcard currentStatus="" eventName="" image={} field="" description=""/>
        <Eventcard currentStatus="" eventName="" image={} field="" description=""/>
        <Eventcard currentStatus="" eventName="" image={} field="" description=""/>
        <Eventcard currentStatus="" eventName="" image={} field="" description=""/>
        <Eventcard currentStatus="" eventName="" image={} field="" description=""/>
        <Eventcard currentStatus="" eventName="" image={} field="" description=""/> */}
      </div>
    </div>
  )
}
