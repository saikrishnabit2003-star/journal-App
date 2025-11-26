import { Link, useNavigate } from "react-router-dom"
import style from './Thirdpage.module.css'
import backButton from '../assets/backbtn.png'
export default function Thirdpage(){
    const nav=useNavigate()
    return (
        <div className={style.container}>
        <button onClick={()=>nav("/")} className={style.backButton}><img src={backButton}alt="Back" /></button>
        <div className={style.main_cointainer}>
            <div className={style.containers}>
                        <div>
                            <h1>OPTION 1</h1>
                        </div>
                        <button onClick={()=>nav("/AvailableJournal")}>Available journals</button>
                    </div>
            <div className={style.containers}>
                         <div>
                            <h1>OPTION 2</h1>
                        </div>
                         <button onClick={()=>nav("/AssociateEditor")}>Associate editor</button>
                    </div>
        </div>
        <div className={style.bottom}></div>
    </div>
    )
}
