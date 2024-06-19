import footer from './footer.module.css'
import Footerleft from './Footerleft.jsx'
import Footerright from './Footerright.jsx'

export default function Footer() {
  return (
    <div className={footer.footercontainer}>
      <div className={footer.leftfooter}>
        <Footerleft/>
      </div>
      <div className={footer.rightfooter}>
        <Footerright/>
      </div>
    </div>
  )
}
