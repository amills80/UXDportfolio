import React from "react";
import { about } from "./copy";
import { Tag } from '../ui';
import styles from "./About.module.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.leftCol}>
          <span className={styles.label}><span className="pill-primary-on-light">{about.label}</span></span>
          <h3 className={styles.headline}>{about.headline}</h3>
          {about.summary.map((p, i) => (
            <p className={styles.summary} key={i}>{p}</p>
          ))}
        </div>
        <div className={styles.rightCol}>
          <p className={styles.personality}>{about.personality}</p>
          <div className={styles.tags}>
            {about.skills.map(skill => (
              <Tag key={skill} variant={skill.toLowerCase().replace(/\W+/g, "")}>
                {skill}
              </Tag>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
