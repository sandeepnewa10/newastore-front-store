import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaCreditCard, FaShippingFast } from 'react-icons/fa'
import { RiRefund2Line } from 'react-icons/ri'
import './Service.scss'

const Service = () => {
  return (
    <section className="service">
        <Container>
            <Row>
                <Col sm="6" md="3">
                    <div className="service__inner">
                        <div className="service__inner-icon">
                            <FaShippingFast/>
                        </div>
                        <div className="service__inner-info">
                            <h4>Free shipping</h4>
                            <span>on all orders over $49.00</span>
                        </div>
                    </div>
                </Col>
                <Col sm="6" md="3">
                    <div className="service__inner">
                        <div className="service__inner-icon"><RiRefund2Line/></div>
                        <div className="service__inner-info">
                        <h4>15 days returns</h4>
                            <span>100% protected by Paypal</span>
                        </div>
                    </div>
                </Col>
                <Col sm="6" md="3">
                    <div className="service__inner">
                        <div className="service__inner-icon"><FaCreditCard/></div>
                        <div className="service__inner-info">
                        <h4>Secure checkout</h4>
                            <span>100% protected by Paypal</span>
                        </div>
                    </div>
                </Col>
                <Col sm="6" md="3">
                    <div className="service__inner">
                        <div className="service__inner-icon"><FaShippingFast/></div>
                        <div className="service__inner-info">
                        <h4>Free shipping</h4>
                            <span>on all orders over $49.00</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Service