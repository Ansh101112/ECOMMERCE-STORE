import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';

const Layout = ({children, title, description, keywords, author}) => {
  return (
    <>
    <Helmet>
      <meta charSet='utf-8'></meta>
      <meta name='description' content={description}></meta>
      <meta name='keywords' content={keywords}></meta>
      <meta name='author' content={author}></meta>   
       <title>{title}</title>

    </Helmet>
        <Header></Header>
        <main>
        <Toaster></Toaster>
          {children}
        </main>
        <Footer></Footer>
    </>
  )
}

Layout.defaultProps = {
  title: "Ecommerce App-Shop now",
  description: "mern stack project",
  keywords: "mern,react,html,js,mongodb",
  author: "Anshuman Tiwari",
};

export default Layout;