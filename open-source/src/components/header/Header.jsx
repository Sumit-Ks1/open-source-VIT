import header from './header.module.css'
import bhopallogo from '../../assets/bhopallogo.png'
import Searchbar from './Searchbar.jsx'
import { Home, Events, Contribute_to_Open_source , Login } from './Features.jsx'
export default function Header() {
  return (
    <div className={header.mainheader}>
      <div className={header.combinedpart}>
        <img className={header.headerlogo} src={bhopallogo} alt='' />
        <Searchbar />
      </div>
      <div className={header.combinedpart} id={header.righthead}>
        <Home />
        <Events />
        <Contribute_to_Open_source />
        <Login />
      </div>
    </div>

  )
}
