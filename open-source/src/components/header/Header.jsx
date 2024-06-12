import header from './header.module.css'
import openSource from './open-source-high-resolution-logo.webp'
import bhopallogo from './bhopallogo.png'

export default function Header() {
  return (
    <div className={header.main-header}>
      <img className={header.headerlogo2} src={bhopallogo} alt=''/>
      {/* <img className={header.headerlogo} src={openSource} alt="" srcset="" /> */}
    </div>
    
  )
}
