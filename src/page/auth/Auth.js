import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserLayout from '../../component/layout/UserLayout'

const Auth = () => {
  return (
    <UserLayout>
    <section><Container><Row><Col md="12">Auth</Col></Row></Container></section>
    </UserLayout>
  )
}

export default Auth