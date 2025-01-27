import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
       <footer className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/email.png")} alt="Email icon" />
                <a href="mailto:saramsika9@gmail.com">saramsika9@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/github.png")} alt="GitHub icon" />
                <a href="https://github.com/saramsika12">Linkedin.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedin.png")} alt="Linkedin icon" />
                <a href="https://www.linkedin.com/in/saramsika-dahal-065b02247/">GitHub.com</a>
            </li>
        </ul>
       </footer>
    );
}