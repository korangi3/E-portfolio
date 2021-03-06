import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/projects-details.module.css'

export default function ProjectDetails({data}) {

    const { html } = data.markdownRemark
    const { url, title, stack, imgsrc } = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className={styles.details}>
                <h2>{ title }</h2>
                <h3>{ stack }</h3>
                <img className={styles.projectpic} src={ imgsrc } />
                <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
                <a href={ url }  target="_blank">
                <img className={styles.pic} src="github.png" /><small> Github</small>
                </a>
            </div>
        </Layout>
    )
}

export const query = graphql`
query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        stack
        title
        url
        imgsrc
      }
      html
    }
  }
  
`
  