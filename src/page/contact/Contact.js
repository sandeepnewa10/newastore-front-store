import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserLayout from '../../component/layout/UserLayout'
import MainBreadCrumb from '../../component/breadcrumb/MainBreadCrumb'

const Contact = () => {
  return (
    <UserLayout>
      <MainBreadCrumb title="Contact" />
      <section><Container><Row><Col md="12">Contact</Col></Row></Container></section>
    </UserLayout>
  )
}

export default Contact