import React from "react";

import styles from "./Achievements.module.css";

import achievements from "../../data/achievements.json";
import { AchievementCard } from "./AchievementCard";
export const Achievements = () => {
    return (
        <section className={styles.container} id="achievements">
        <h2 className={styles.title}>Achievements</h2>
        <div className={styles.achievements}>
            {achievements.map((achievement, id) => {
             return (
                <AchievementCard key={id} achievement={achievement}/>
            
             );
            })} 
        </div>
        </section>
    );
}