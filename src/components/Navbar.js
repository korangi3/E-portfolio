import { Link, graphql } from "gatsby"
//import { useStaticQuery } from "gatsby"
import React from "react"

export default function Navbar() {
 /* const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata */
  return (
    <nav>
      <h1><Link to="/">E-portfolio</Link></h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">projects</Link>
        <Link to="/contact">Contact me</Link>
      </div>
    </nav>
  )
}
