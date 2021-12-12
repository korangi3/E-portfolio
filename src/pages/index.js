import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import 'boxicons'

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
      <a href="https://github.com/korangi3" target="_blank" ><box-icon name='github' type='logo' size='md' animation='burst-hover' color='#d3e50e' ></box-icon></a>
       <a href="https://www.linkedin.com/in/bipin-gurung-535ba420a/" target="_blank"><box-icon type='logo' name='linkedin' size='md' animation='burst-hover' color='#d3e50e'></box-icon></a> 
      <a href="https://docs.google.com/document/d/1WcCZjJfR875DjdTA9OlsGTlBuglQIzIs/edit?usp=sharing&ouid=107591505742405245245&rtpof=true&sd=true" target="_blank"><p>RESUME</p></a>
      </div>
      <div className={styles.btm}>
        <h4>Technologies I'm familiar with</h4>
        <div className={styles.icons}>
          <div>
          <box-icon name='html5' type='logo' size='lg' color='#FF4500' />
            <p>Html</p>
          </div>
          <div>
          <box-icon type='logo' name='css3' size='lg' color='#2965F1'></box-icon>
            <p>CSS</p>
          </div>
          <div>
          <box-icon name='javascript' type='logo' color='#F0DB4F' size='lg'></box-icon>
            <p>Javascript</p>
          </div>
          <div>
            <img src="python.png"/>
            <p>Python</p>
          </div>
          <div>
          <box-icon name='react' type='logo' color='#2bbbe1' size='lg'></box-icon>
            <p>React</p>
          </div>
          <div>
          <box-icon name='git' type='logo' color='#f34f29' size='lg'></box-icon>
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
