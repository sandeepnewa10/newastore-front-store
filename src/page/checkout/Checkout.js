import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserLayout from '../../component/layout/UserLayout'
import MainBreadCrumb from '../../component/breadcrumb/MainBreadCrumb'

const Checkout = () => {
  return (
    <UserLayout>
      <MainBreadCrumb title="Checkout" />
      <section><Container><Row><Col md="12">Checkout</Col></Row></Container></section>
    </UserLayout>
  )
}

export default Checkout