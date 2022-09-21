import React from 'react'
import Footer from '../footer/Footer'
import Navigation from '../navigation/Navigation'

const UserLayout = ({ children }) => {
    return (
        <>
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default UserLayout