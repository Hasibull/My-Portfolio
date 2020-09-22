import React from "react"
import Styles from "../styles/styling.module.css"

const findMe = () => {
  return (
    <div>
      <p className={Styles.findMe}>
        Find Me on{" "}
        <a
          href={"https://web.facebook.com/mohammadhasibulislam.islam.7/"}
          className={Styles.linkStyle}
          target={"blank"}
        >
          FaceBook
        </a>{" "}
        and{" "}
        <a
          href={"https://github.com/Hasibull"}
          className={Styles.linkStyle}
          target={"blank"}
        >
          Github
        </a>
      </p>
      <p className={Styles.findMe}>
        Contact with me via{" "}
        <a
          href={"mailto:hasibulislam4500@gmail.com?Subject=Feedback"}
          className={Styles.linkStyle}
          target={"blank"}
        >
          Gmail
        </a>
      </p>
    </div>
  )
}

export default findMe
