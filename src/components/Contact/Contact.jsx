import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Your feedback and input are valued. If there's anything on your mind or if you need support, I'm here and ready to assist you</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="kolapakarmayuri@gmail.com">kolapakarmayuri@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/mayuri-kolapkar-678698209">linkedin.com/mayuri_kolapkar</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="http://github.com/MayuriKolapkar">github.com/mayurikolapkar</a>
        </li>
      </ul>
    </footer>
  );
};
