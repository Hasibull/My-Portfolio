import React from "react"
import Styles from "../styles/styling.module.css"

const navbar = () => {
  return (
    <div>
      <div className={Styles.boxing}>
        <ul style={{ listStyle: "none" }}>
          <li className={Styles.li}>
            <a href={"#"} className={Styles.linkStyle}>
              Home
            </a>
          </li>
          <li className={Styles.li}>
            <a href={"#"} className={Styles.linkStyle}>
              Education
            </a>
          </li>
          <li className={Styles.li}>
            <a href={"#"} className={Styles.linkStyle}>
              Skills
            </a>
          </li>
          <li className={Styles.li}>
            <a href={"#"} className={Styles.linkStyle}>
              About
            </a>
          </li>
        </ul>
      </div>
      <br></br>
      <br></br>
    </div>
  )
}
export default navbar
