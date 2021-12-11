import { Link } from 'gatsby'
import React from 'react'
import Layout from "../components/Layout"
import * as styles from "../styles/contact.module.css"

export default function Submitted() {
    return (
        <Layout>
        <div className={styles.container}>
            <h1>Your message was sent.</h1><br/>
            <Link className={styles.link} to="/contact">Go back.</Link>
        </div>
        </Layout>
    )
}
