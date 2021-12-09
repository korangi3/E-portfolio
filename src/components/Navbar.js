import { Link, graphql } from "gatsby"
import React from "react"

export default function Navbar() {
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
