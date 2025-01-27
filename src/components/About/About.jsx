import React from "react";

import styles from "./About.module.css"
import { getImageUrl } from "../../utils";

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("/about/about.png")} alt="Me sitting with the laptop" 
            className={styles.aboutImg}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursor.png')} alt="Cursor Icon" />
                <div className={styles.aboutItemText}>
                   <h3>Frontend Developer</h3>
                   <p>I am a frontend developer with experience in building responsive and optimized sites using Html, Css and React</p>
                </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cloud-server.png')} alt="server Icon" />
                <div className={styles.aboutItemText}>
                   <h3>Backend Developer</h3>
                   <p>I have experience developing fast and optimised back-end systems and APIs using Asp.Net</p>
                </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/user-interface.png')} alt="UI Icon" />
                <div className={styles.aboutItemText}>
                   <h3>UI Designer</h3>
                   <p>
                    I have experience designing UIs.Before diving into development, I like to plan and create my projects in Figma, allowing me to visually map out the user experience and interface.
                    </p>
                </div>
                </li>
            </ul>
        </div>
    </section>
}