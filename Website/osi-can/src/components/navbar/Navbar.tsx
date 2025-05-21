import styles from "./Navbar.module.css";

export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <input typeof="text"></input>
            <ul>
                <li>Home</li>
                <li>Support Form</li>
                <li>About</li>
                <li>FAQ's</li>
                <li>Programs</li>
                <li>Resources</li>
                <li>LEGAL/PRIVACY</li>
                <li>Blogs & Podcasts</li>
                <li>Events & Workshops</li>
            </ul>
        </div>
    )
}