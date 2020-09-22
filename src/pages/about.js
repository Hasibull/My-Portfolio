import React from "react"
import Styles from "../styles/styling.module.css"
import Profile from "../images/profile.jpg"

const about = () => {
  return (
    <div>
      <img
        src={Profile}
        className={Styles.imageStyle}
        alt={"profile picture"}
      />
      <p className={Styles.paddingParagraph}>
        Self-motivated and self-dependent and always think positive. Having a
        good knowledge in computer science, I want to grow my career in software
        engineering. Very passionate about learning new technologies to develop
        my knowledge, and skills. Loved to solve algorithmic problem.
      </p>
    </div>
  )
}
export default about
