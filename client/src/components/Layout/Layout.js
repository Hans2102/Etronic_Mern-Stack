import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import { Toaster } from 'react-hot-toast';


const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <div className='container main-body'>
                <main style={{ minHeight: "70vh" }}>
                    <Toaster />
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'Etronic',
    description: 'Mern Etronic',
    keywords: 'MongoDB, Express, React, Node',
    author: 'Thanh Tung'
}

export default Layout