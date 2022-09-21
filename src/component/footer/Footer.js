import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaAddressBook } from 'react-icons/fa';
import { RiFacebookFill, RiInstagramLine, RiMailFill, RiPhoneLine, RiPinterestFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri';
import Logo from '../../assets/logo1.png';
import './Footer.scss';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='footer__top'>
                <Col sm="6" md="6">
                        <div className="footer__top-inner"><img src={Logo} className="img-fluid" alt="Newastore" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt velit quasi placeat doloribus explicabo similique veritatis neque rem incidunt itaque?</p>
                        <ul className="footer-content">
                        <li><i><FaAddressBook/></i><span>1234 Heaven Stress, Beverly Hill.</span></li>
                        <li><i><RiMailFill/></i><span>Email: info@newastore.com</span></li>
                         <li><i><RiPhoneLine/></i><span>Telephone: +01 234 567 89</span></li>
                        
                    </ul>

                        </div>

                 </Col>
                 <Col sm="6" md="3">
                <div className="footer__top-inner">
                    <h4 className="footer-title">Information</h4>
                    <ul className="footer-content">
                        <li><Link className="nav-link" to="/about">About Us</Link></li>
                        <li><Link className="nav-link" to="/">Delivery Information</Link></li>
                        <li><Link className="nav-link" to="/privacypolicy">Privacy Policy</Link></li>
                        <li><Link className="nav-link" to="/termsandcondition">Terms & Condition</Link></li>
                    </ul>
                 </div>
                </Col>
                <Col sm="6" md="3">
                <div className="footer__top-inner">
                    <h4 className="footer-title">Customer Service</h4>
                    <ul className="footer-content">
                        <li><Link className="nav-link" to="/Shippingpolicy">Shipping Policy</Link></li>
                        <li><Link className="nav-link" to="/contact">Help & Contact Us</Link></li>
                        <li><Link className="nav-link" to="/returnsandrefuns">Returns & Refunds</Link></li>
                        <li><Link className="nav-link" to="/termsandcondition">Terms & Condition</Link></li>
                    </ul>
                 </div>
                </Col>








                </Row>
                <Row className='footer__bottom'>
                    <Col sm="12" md="6"><div className="footer__bottom-inner">Copyright © 2019 NewaStore. All rights reserved.</div></Col>
                    <Col sm="12" md="6"><div className="footer__bottom-inner">
                        <ul className='social-link'>
                            <li><a href="$"><RiFacebookFill/></a></li>
                            <li><a href="$"><RiTwitterFill/></a></li>
                            <li><a href="$"><RiInstagramLine/></a></li>
                            <li><a href="$"><RiPinterestFill/></a></li>
                            <li><a href="$"><RiYoutubeFill/></a></li>
                            

                        </ul>
                        </div></Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer