import React from 'react'
import Header from './Header.js'
import Footer from './Footer'
import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast'


const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title> {title} </title>
            </Helmet>
            <Header />
            <main style={{ minHeight: "74vh" }}>
                <Toaster />
                {children}
            </main>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: "Ecommerce App - Shop now",
    description: "Mern stack project",
    keywords: "mern,react,node,mongodb",
    author: "Tabrez Teli"
}

export default Layout