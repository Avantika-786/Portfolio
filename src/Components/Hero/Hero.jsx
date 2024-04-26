import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Avantika Harale </h1>
        {/* <p className={styles.description}>
          <span class="bullet"></span>Passionate to explore and gain ,real
          experience things
          <br />
          <span class="bullet"></span>Aspired to become a better version of
          myself
          <br />
          <span class="bullet"></span>Excited for working with new minds and
          experience the unexperienced
        </p> */}
        <p className={styles.description}>
          <ul>
            <li>Passionate to explore and gain ,real experience things</li>
            <li>Aspired to become a better version of myself</li>
            <li>
              Excited for working with new minds and experience the
              unexperienced
            </li>
          </ul>
        </p>
        <a
          href="mailto:avantikaharale81email@email.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
