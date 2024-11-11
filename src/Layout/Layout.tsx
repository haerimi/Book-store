import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
  return (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout
