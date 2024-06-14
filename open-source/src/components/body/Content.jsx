import content from './content.module.css';
import { FaSearch} from "react-icons/fa"

export default function Content() {

    const HandleClick = () => {
        window.alert("You are getting redirected to Github official WebPage.")

        window.open('https://github.com/open-source')
    }

    return (
        <div id={content.contentcontainer}>
            <h1 className={content.firstthought}>
                “From Solo to Global - Your Code Can Change the World. Open Source It!”
            </h1>
            <h2 className={content.secondthought}>
                One line of "Code" could either destroy the global economy or can build one. Get the true poweer in you with the positive mindset. let's contribute in betternment of livelihood.
            </h2>
            <div>
                
                <button type="button" onClick={HandleClick} className={content.buttonc}>
                <FaSearch className={content.search}/> 
                 Explore the Global Community
                </button>
            </div>
        </div>
    )
}
