import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <br />
          <br />
          <h4>Hello!!!</h4>
          <br />
          <h4>My name is Bipin Gurung.</h4>
          <br />
          <h4>A Fullstack Developer.</h4>
          <br />
          <h4>Working with Django and React.</h4>
          <br />
          <h5>
            Currently pursuing Bachelor in CSIT at{" "}
            <a href="https://tribhuvan-university.edu.np/" target="_blank">
              Tribhuvan University
            </a>
          </h5>
          <br />
          <br />
          <br />
          <Link className={styles.btn} to="/projects">
            My Projects
          </Link>
        </div>
        <img className={styles.profile} src="/profile.jpg" alt="site banner" />
      </section>
      <div className={styles.res}>
      <a href="https://github.com/korangi3" target="_blank" ><img src="githublogo.png"/></a>
       <a href="https://www.linkedin.com/in/bipin-gurung-535ba420a/" target="_blank"><img src="linkedin.png"/></a> 
      <a href="https://drive.google.com/file/d/1xcmHzWEqJB_ELzk0WBbxgDeT_dQ2OjEo/view?usp=sharing" target="_blank"><p>RESUME</p></a>
      </div>
      <div className={styles.btm}>
        <h4>Technologies I'm familiar with</h4>
        <div className={styles.icons}>
          <div>
          <img src="html.png"/>
            <p>Html</p>
          </div>
          <div>
          <img src="css.png"/>
            <p>CSS</p>
          </div>
          <div>
          <img src="js.png"/>
            <p>Javascript</p>
          </div>
          <div>
            <img src="python.png"/>
            <p>Python</p>
          </div>
          <div>
          <img src="react.png"/>
            <p>React</p>
          </div>
          <div>
          <img src="git.png"/>
            <p>Git</p>
          </div>
          <div>
            <img src="gatsby.png"/>
            <p>Gatsby</p>
          </div>
          
        </div>
      </div>
    </Layout>
  )
}
