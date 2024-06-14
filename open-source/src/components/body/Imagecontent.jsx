import image from './imagecontent.module.css'
import { TbWorldCode } from "react-icons/tb";
import { IoPencil } from "react-icons/io5";


export default function Imagecontent() {
    // let pencil= '8em'
    // let worldsize= '11em'
    // // console.log(window.innerWidth)
    // if(window.innerWidth<960)
    //     {
    //         pencil='4em';
    //         worldsize='7em';
    //         console.log(window.innerWidth)
    //     }
  return (
    <div className={image.imagecontent}>
        <TbWorldCode size='11em' className={image.shape}/>
        <IoPencil size='8em' className={image.shape}/>
    </div>
  )
}
