import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Saramsika Dahal</h1>
        <p className={styles.description}>
          I am a passionate and ambitious developer working primarily in .NET
          framework, with a growing skill set in frontend technologies like
          React. My journey into development has been marked by a commitment to
          learning and creating solutions that make a difference. I love
          building web applications that address real-world challenges, such as
          my ongoing project like Pizza Hub, a platform to streamline pizza
          delivery services.
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
