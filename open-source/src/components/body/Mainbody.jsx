import mainbody from './mainbody.module.css'
import Content from './Content.jsx'
import Imagecontent from './Imagecontent.jsx'

export default function Mainbody() {
  return (
    <div className={mainbody.bodycontainer}>
        <Content />
        <Imagecontent />
    </div>
  )
}
