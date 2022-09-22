import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserLayout from '../../component/layout/UserLayout'
import MainBreadCrumb from '../../component/breadcrumb/MainBreadCrumb'


const Auth = () => {
  return (
    <UserLayout>
      <MainBreadCrumb title="Auth" />
      <section><Container><Row><Col md="12">Auth</Col></Row></Container></section>
    </UserLayout>
  )
}

export default Auth