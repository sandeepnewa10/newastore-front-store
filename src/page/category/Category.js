import React from 'react'
import {Col, Container, Form, Row } from 'react-bootstrap'
import UserLayout from '../../component/layout/UserLayout'
import MainBreadCrumb from '../../component/breadcrumb/MainBreadCrumb'
import './Category.scss'
import product1 from '../../assets/product/product1.jpg';
import product2 from '../../assets/product/product2.jpg';
import product3 from '../../assets/product/product3.jpg';
import product4 from '../../assets/product/product4.jpg';
import product5 from '../../assets/product/product5.jpg';
import product6 from '../../assets/product/product6.jpg';
import product7 from '../../assets/product/product7.jpg';
import product8 from '../../assets/product/product8.jpg';
import product9 from '../../assets/product/product9.jpg';
import product10 from '../../assets/product/product10.jpg';
import product11 from '../../assets/product/product11.jpg';
import product12 from '../../assets/product/product12.jpg';
import product13 from '../../assets/product/product6.jpg';
import product14 from '../../assets/product/product14.jpg';
import { FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa'
import Pagination from '../../component/pagination/Pagination'
import { Link } from 'react-router-dom'


const Category = () => {
    return (
        <UserLayout>
            <MainBreadCrumb title="Category" />
            <section className="category">
                <Container>
                    <Row className="mb-5">
                        <Col md="10">
                            Showing 1 - 12 of 40 results
                        </Col>
                        <Col md="2">
                            <Form>
                                <Form.Group>
                                    <Form.Select>
                                        <option value="" selected="selected">Default sorting</option>
                                        <option value="popularity">Sort by popularity</option>
                                        <option value="rating">Sort by average rating</option>
                                        <option value="date">Sort by latest</option>
                                        <option value="price">Sort by price: low to high</option>
                                        <option value="price-desc">Sort by price: high to low</option>

                                    </Form.Select>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="category__inner">
                        {/* <Col md="4" className='product'>
                            <div className="product__item">
                                <div className="product__item-transition">
                                    <figure><img src={product1} alt="Product" className="img-fluid" /></figure>
                                </div>
                                <div className="product__item-dis">
                                    <span className="product__item-dis-cat">Category</span>
                                    <h3 className="product__item-dis-title">Product Title</h3>
                                    <span className="product__item-dis-price">$90</span>
                                    <button className="product__item-dis-btn btn">Add</button>
                                </div>
                            </div>
                        </Col> */}

                        <Col xs="12" sm="6" md='3' className='mb-3'>
                            <div className="product__item">
                                <div className="product__item-img">
                                    <img src={product1} alt='caption' className="img-fluid" />
                                    <div className="product__item-img-dsc">
                                   
                                        <span> <Link className="" to="/cart"><i><FaShoppingCart /></i></Link></span>
                                        <span><Link className="" to="/product"><i><FaSearch /></i></Link></span>
                                        <span><a href="c"><i><FaHeart /></i></a></span>
                                    </div>
                                </div>

                                <div className="product__item-info">
                                    <h3>Product Title</h3>
                                    <span>$40</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6" md='3' className='mb-3'>
                            <div className="product__item">
                                <div className="product__item-img">
                                    <img src={product2} alt='caption' className="img-fluid" />
                                    <div className="product__item-img-dsc">
                                        <span> <Link className="" to="/cart"><i><FaShoppingCart /></i></Link></span>
                                        <span><Link className="" to="/product"><i><FaSearch /></i></Link></span>
                                        <span><a href="c"><i><FaHeart /></i></a></span>
                                    </div>
                                </div>

                                <div className="product__item-info">
                                    <h3>Product Title</h3>
                                    <span>$40</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6" md='3' className='mb-3'>
                            <div className="product__item">
                                <div className="product__item-img">
                                    <img src={product3} alt='caption' className="img-fluid" />
                                    <div className="product__item-img-dsc">
                                        <span><Link className="" to="/cart"><i><FaShoppingCart /></i></Link></span>
                                        <span><Link className="" to="/product"><i><FaSearch /></i></Link></span>
                                        <span><a href="c"><i><FaHeart /></i></a></span>
                                    </div>
                                </div>

                                <div className="product__item-info">
                                    <h3>Product Title</h3>
                                    <span>$40</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6" md='3' className='mb-3'>
                            <div className="product__item">
                                <div className="product__item-img">
                                    <img src={product4} alt='caption' className="img-fluid" />
                                    <div className="product__item-img-dsc">
                                        <span> <Link className="" to="/cart"><i><FaShoppingCart /></i></Link></span>
                                        <span><Link className="" to="/product"><i><FaSearch /></i></Link></span>
                                        <span><a href="c"><i><FaHeart /></i></a></span>
                                    </div>
                                </div>

                                <div className="product__item-info">
                                    <h3>Product Title</h3>
                                    <span>$40</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6" md='3' className='mb-3'>
                            <div className="product__item">
                                <div className="product__item-img">
                                    <img src={product5} alt='caption' className="img-fluid" />
                                    <div className="product__item-img-dsc">
                                        <span> <Link className="" to="/cart"><i><FaShoppingCart /></i></Link></span>
                                        <span><Link className="" to="/product"><i><FaSearch /></i></Link></span>
                                        <span><a href="c"><i><FaHeart /></i></a></span>
                                    </div>
                                </div>

                                <div className="product__item-info">
                                    <h3>Product Title</h3>
                                    <span>$40</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6" md='3' className='mb-3'>
                            <div className="product__item">
                                <div className="product__item-img">
                                    <img src={product6} alt='caption' className="img-fluid" />
                                    <div className="product__item-img-dsc">
                                        <span> <Link className="" to="/cart"><i><FaShoppingCart /></i></Link></span>
                                        <span><Link className="" to="/product"><i><FaSearch /></i></Link></span>
                                        <span><a href="c"><i><FaHeart /></i></a></span>
                                    </div>
                                </div>

                                <div className="product__item-info">
                                    <h3>Product Title</h3>
                                    <span>$40</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6" md='3' className='mb-3'>
                            <div className="product__item">
                                <div className="product__item-img">
                                    <img src={product7} alt='caption' className="img-fluid" />
                                    <div className="product__item-img-dsc">
                                        <span> <Link className="" to="/cart"><i><FaShoppingCart /></i></Link></span>
                                        <span><Link className="" to="/product"><i><FaSearch /></i></Link></span>
                                        <span><a href="c"><i><FaHeart /></i></a></span>
                                    </div>
                                </div>

                                <div className="product__item-info">
                                    <h3>Product Title</h3>
                                    <span>$40</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6" md='3' className='mb-3'>
                            <div className="product__item">
                                <div className="product__item-img">
                                    <img src={product8} alt='caption' className="img-fluid" />
                                    <div className="product__item-img-dsc">
                                        <span> <Link className="" to="/cart"><i><FaShoppingCart /></i></Link></span>
                                        <span><Link className="" to="/product"><i><FaSearch /></i></Link></span>
                                        <span><a href="c"><i><FaHeart /></i></a></span>
                                    </div>
                                </div>

                                <div className="product__item-info">
                                    <h3>Product Title</h3>
                                    <span>$40</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6" md='3' className='mb-3'>
                            <div className="product__item">
                                <div className="product__item-img">
                                    <img src={product9} alt='caption' className="img-fluid" />
                                    <div className="product__item-img-dsc">
                                        <span> <Link className="" to="/cart"><i><FaShoppingCart /></i></Link></span>
                                        <span><Link className="" to="/product"><i><FaSearch /></i></Link></span>
                                        <span><a href="c"><i><FaHeart /></i></a></span>
                                    </div>
                                </div>

                                <div className="product__item-info">
                                    <h3>Product Title</h3>
                                    <span>$40</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6" md='3' className='mb-3'>
                            <div className="product__item">
                                <div className="product__item-img">
                                    <img src={product10} alt='caption' className="img-fluid" />
                                    <div className="product__item-img-dsc">
                                        <span> <Link className="" to="/cart"><i><FaShoppingCart /></i></Link></span>
                                        <span><Link className="" to="/product"><i><FaSearch /></i></Link></span>
                                        <span><a href="c"><i><FaHeart /></i></a></span>
                                    </div>
                                </div>

                                <div className="product__item-info">
                                    <h3>Product Title</h3>
                                    <span>$40</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6" md='3' className='mb-3'>
                            <div className="product__item">
                                <div className="product__item-img">
                                    <img src={product11} alt='caption' className="img-fluid" />
                                    <div className="product__item-img-dsc">
                                        <span> <Link className="" to="/cart"><i><FaShoppingCart /></i></Link></span>
                                        <span><Link className="" to="/product"><i><FaSearch /></i></Link></span>
                                        <span><a href="c"><i><FaHeart /></i></a></span>
                                    </div>
                                </div>

                                <div className="product__item-info">
                                    <h3>Product Title</h3>
                                    <span>$40</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6" md='3' className='mb-3'>
                            <div className="product__item">
                                <div className="product__item-img">
                                    <img src={product12} alt='caption' className="img-fluid" />
                                    <div className="product__item-img-dsc">
                                        <span> <Link className="" to="/cart"><i><FaShoppingCart /></i></Link></span>
                                        <span><Link className="" to="/product"><i><FaSearch /></i></Link></span>
                                        <span><a href="c"><i><FaHeart /></i></a></span>
                                    </div>
                                </div>

                                <div className="product__item-info">
                                    <h3>Product Title</h3>
                                    <span>$40</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6" md='3' className='mb-3'>
                            <div className="product__item">
                                <div className="product__item-img">
                                    <img src={product13} alt='caption' className="img-fluid" />
                                    <div className="product__item-img-dsc">
                                        <span> <Link className="" to="/cart"><i><FaShoppingCart /></i></Link></span>
                                        <span><Link className="" to="/product"><i><FaSearch /></i></Link></span>
                                        <span><a href="c"><i><FaHeart /></i></a></span>
                                    </div>
                                </div>

                                <div className="product__item-info">
                                    <h3>Product Title</h3>
                                    <span>$40</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6" md='3' className='mb-3'>
                            <div className="product__item">
                                <div className="product__item-img">
                                    <img src={product14} alt='caption' className="img-fluid" />
                                    <div className="product__item-img-dsc">
                                        <span> <Link className="" to="/cart"><i><FaShoppingCart /></i></Link></span>
                                        <span><Link className="" to="/product"><i><FaSearch /></i></Link></span>
                                        <span><a href="c"><i><FaHeart /></i></a></span>
                                    </div>
                                </div>

                                <div className="product__item-info">
                                    <h3>Product Title</h3>
                                    <span>$40</span>
                                </div>
                            </div>
                        </Col>                        

                    </Row>
                    <Row>
                        <Pagination/>
                    </Row>
                </Container></section>
        </UserLayout>

    )
}

export default Category