import bhopallogo from '../../assets/open-source-high-resolution-logo.webp';
import footerleft from './footerleft.module.css'

export default function Footerleft() {
    return (
        <div className={footerleft.mainleftinnercontainer}>
            <div className={footerleft.leftcontainer1}>
                <img className={footerleft.footerimage} src={bhopallogo} alt="OpenSource Contribution" />
                <div>
                    <h2>
                        Open Source Contribution
                    </h2>
                </div>
            </div>
            <div style={{color: "gray", padding:'10px'}}>
                Built by Sumit Kumar Singh
            </div>
        </div>
    )
}
