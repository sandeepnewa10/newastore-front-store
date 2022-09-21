import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserLayout from '../../component/layout/UserLayout'

const About = () => {
  return (
    <UserLayout>
    <section><Container><Row><Col md="12">About</Col></Row></Container></section>
    </UserLayout>
  )
}

export default About