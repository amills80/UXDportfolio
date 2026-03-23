import React from "react";
import { experience } from "../../data/experience";
import { Button, ExperienceEntry } from '../ui';
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <span className={styles.label}><span className="pill-primary-on-light">Experience</span></span>
      <div className={styles.entries}>
        {experience.map((job, i) => (
          <ExperienceEntry key={job.company + job.dates} {...job} />
        ))}
      </div>
      <div className={styles.resumeCtaRow}>
        <Button
          as="a"
          href="/api/download-resume"
          variant="primary"
          size="large"
        >
          ⬇ Download Resume (PDF)
        </Button>
        <div className={styles.caption}>Last updated March 2026</div>
      </div>
    </section>
  );
}
