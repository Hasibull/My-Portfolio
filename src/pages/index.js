import React from "react"

import Navbar from "../components/navbar"
import Header from "../components/header"
import About from "./about"
import Education from "../components/education"
import FindMe from "../components/findMe"
import Styles from "../styles/styling.module.css"

export default function () {
  return (
    <div className={Styles.main}>
      <Navbar />
      <Header />
      <About />
      <Education />
      <FindMe />
    </div>
  )
}
