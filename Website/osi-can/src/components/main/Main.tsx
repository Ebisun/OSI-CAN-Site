import styles from "./Main.module.css";
import Navbar from "../navbar/Navbar";

export default function Main(){
    return(
        <div className = {styles.main}>
            <div></div>
            <div className={styles.helpline}>
                <h2>24/7 Crisis / Suicide Hotline: Just dial 988</h2>
                <h3>Click to call</h3>
            </div>
            <Navbar />
            <div>
            

            </div>
        </div>
    )
}