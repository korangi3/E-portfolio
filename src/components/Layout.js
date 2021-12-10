import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                { children }
            </div>
            <footer>
                <p>© Bipin 2021, Built by <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby</a></p>
            </footer>
        </div>
    )
}
