import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me Sitting with laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>PUNE INSTITUTE OF COMPUTER TECHNOLOGY</h3>
              <p>B.E Electronics and Telecommunication</p>
              <p>
                2021-2025 <br />
                CGPA:9.0
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
            <div className={styles.aboutItemText}>
              <h3>S.M.LOHIA JUNIOR COLLEGE</h3>
              <p>
                PCMB-MAHARASHTRA STATE BOARD
                <br />
                2021
                <br />
                MHTCET Percentile‑94.47
                <br /> 12th Percentage‑92.50
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
            <div className={styles.aboutItemText}>
              <h3>SHRI.JYOTIRLING VIDYAMANDIR KOLHAPUR</h3>
              <p>
                2019 <br />
                10th Percentage‑90.40
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
