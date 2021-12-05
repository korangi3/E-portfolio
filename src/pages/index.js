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
          <h4>Working with Django and React</h4>
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
        <img
          src="/border1.png"
          alt="site banner"
          style={{ maxWidth: "100%" }}
        />
      </section>
      <div className={styles.btm}>
        <h4>Technologies I'm familiar with</h4>
        <div className={styles.icons}>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" />
            <p>Html</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/732/732007.png"/>
            <p>CSS</p>
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png"/>
            <p>Javascript</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"/>
            <p>Python</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"/>
            <p>React</p>
          </div>
          <div>
            <img src="https://cdn-icons.flaticon.com/png/512/1240/premium/1240970.png?token=exp=1638624333~hmac=8c0ecd1423a32f7562291cd31f29796b"/>
            <p>Git</p>
          </div>
          <div>
            <img src="https://www.iconbolt.com/iconsets/remix-icon-line/gatsby.svg"/>
            <p>Gatsby</p>
          </div>
          
        </div>
      </div>
    </Layout>
  )
}
