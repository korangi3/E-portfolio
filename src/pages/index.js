import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Deploy & Develop</h3>
          <p>Full Stack Developer</p>
          <Link className={styles.btn} to ="/projects">My Projects</Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: '100%'}}/>
      </section>
    </Layout>
  )
}