import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/contact.module.css"

export default function Contact() {
  return (
    <Layout>
      <form action="POST" data-netlify="true">
        <div className={styles.container}>
          <h1>Send me a message.</h1><br/>
          <p>Name:</p>
          <input type="text" name="name" placeholder="Enter full name"></input>
          <p>Email: </p>
          <input type="text" name="email" placeholder="Enter email address"></input>
          <p>Message: </p>
          <textarea name="message" placeholder="Enter message"></textarea>
          <br />
          <button onClick="submit" name="submit">Submit</button>
        </div>
      </form>
    </Layout>
  )
}
