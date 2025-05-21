import styles from './Header.module.css'

export default function Header(){
    return(
        <>
            <div className={styles.header}>
                    <img src='/images/icon.png'></img>
                    <div>
                        <p>Email: <br/>osicannb@justusinc.ca</p>
                        <p>Phone: <br/>506-566-3896</p>
                    </div>
          
            </div>
            <div className={styles.helpline}>

                    <h2>24/7 Crisis / Suicide Hotline: Just dial 988</h2>
                    <h3>Click to call</h3>

            </div>
        </>
    )
}