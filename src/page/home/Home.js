import React from 'react'
import Feature from '../../component/feature/Feature'
import UserLayout from '../../component/layout/UserLayout'
import Service from '../../component/service/Service'
import Slider from '../../component/slider/Slider'

const Home = () => {
    return (
        <>
            <UserLayout>
                <Slider />
                <Feature />
                <Service />
            </UserLayout>
        </>
    )
}

export default Home