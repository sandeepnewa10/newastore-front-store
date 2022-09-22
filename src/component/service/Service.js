import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaCreditCard, FaShippingFast } from 'react-icons/fa'
import { RiBriefcase2Line, RiWechatFill } from 'react-icons/ri'
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
                            <h4>Free Shipping & Returns</h4>
                            <span>For all orders over $99</span>
                        </div>
                    </div>
                </Col>
                <Col sm="6" md="3">
                    <div className="service__inner">
                        <div className="service__inner-icon"><RiBriefcase2Line/></div>
                        <div className="service__inner-info">
                        <h4>Secure Payment</h4>
                            <span>We ensure secure payment</span>
                        </div>
                    </div>
                </Col>
                <Col sm="6" md="3">
                    <div className="service__inner">
                        <div className="service__inner-icon"><FaCreditCard/></div>
                        <div className="service__inner-info">
                        <h4>Money Back Guarantee</h4>
                            <span>Any back within 30 days</span>
                        </div>
                    </div>
                </Col>
                <Col sm="6" md="3">
                    <div className="service__inner">
                        <div className="service__inner-icon"><RiWechatFill/></div>
                        <div className="service__inner-info">
                        <h4>Customer Support</h4>
                            <span>Call or email us 24/7</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Service