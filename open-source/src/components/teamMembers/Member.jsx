import member from './member.module.css';
export default function Member(props) {
  return (
    <div className={member.teamdeatil}>
        <div className={member.profileimage}>
            {props.profile}
        </div>
        <h2 className={member.namedata}>
            {props.name}
        </h2>
        <div className={member.postiondata}>
            {props.position} of Open Source Club @VIT BHOPAL
        </div>
    </div>
  )
}
