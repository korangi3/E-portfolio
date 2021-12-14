import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/contact.module.css"

export default function Contact() {
  return (
    <Layout>
      <form action="POST">
        <div className={styles.container}>
          <div className={styles.formbox}>
          <h2>Send me a message.</h2><br/>
          <p>Name:</p>
          <input type="text" name="name" placeholder="Enter full name"></input>
          <p>Email: </p>
          <input type="text" name="email" placeholder="Enter email address"></input>
          <p>Message: </p>
          <textarea name="message" placeholder="Enter message"></textarea>
          <br />
          <Link className={styles.button} to="/submitted">Submit</Link>
          </div>
        </div>
      </form>
    </Layout>
  )
}
