import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserLayout from '../../component/layout/UserLayout'

const Cart = () => {
  return (
    <UserLayout>
    <section><Container><Row><Col md="12">Cart</Col></Row></Container></section>
    </UserLayout>
  )
}

export default Cart