import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Saramsika Dahal</h1>
        <p className={styles.description}>
          I am a passionate and ambitious developer with a growing skill set in frontend technologies like
          React.js, Next.js and Tailwind Css and backend technologies like ASP.Net. I love
          building web applications that address real-world challenges, such as
          my projects like Pizza Hub, Admin Dashboard panel and so on.
        </p>
        <a href="mailto:saramsika9@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/sams.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
