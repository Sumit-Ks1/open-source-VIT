import card from './eventcard.module.css'
export default function Eventcard(props) {
    return (
        <div className={card.cardcontainer}>
            <h3 className={card.cardstatus}>
                {props.currentStatus} ....
            </h3>
            <div className={card.innerconatiner}>
                <h2 className={card.cardeventname}>
                    {props.eventName}
                </h2>
                <div className={card.cardimage}>
                    {props.image}
                </div>
                <h3 className={card.cardfield}>
                    {props.field}
                </h3>
                <div className={card.carddescription}>
                    {props.description}
                </div>
            </div>
        </div >
    )
}
