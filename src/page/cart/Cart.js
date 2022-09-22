import React from 'react'
import { Col, Container, Row, Button, Table, Form, InputGroup } from 'react-bootstrap'
import UserLayout from '../../component/layout/UserLayout'
import MainBreadCrumb from '../../component/breadcrumb/MainBreadCrumb'

import product1 from '../../assets/product/product1.jpg';
import product2 from '../../assets/product/product2.jpg';
import product3 from '../../assets/product/product3.jpg';
import product4 from '../../assets/product/product4.jpg';

import './Cart.scss';
import { FaTimes } from 'react-icons/fa';

const Cart = () => {
  return (
    <UserLayout>
      <MainBreadCrumb title="Cart" />
      <section className="cart-template">
        <Container>
          <div className="filter-section">
            <div className="filter-section_continue">
              <Button type='button' className='btn btn-light'>Continue Shopping</Button> </div>
            <div className="filter-section_bag">
              <ul>
                <li className='mx-3'>shopping bag(2)
                </li>
                <li>Your Wishlist</li>
              </ul>

            </div>
            <div className="filter-section_checkout"> <Button type='button' className='btn btn-light'>checkout now</Button> </div>
          </div>
          <Row className="cart-item">
            <Col md="12">

              <Table className="cart-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Qty</th>
                    <th>Subject</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="product-thumbnail">
                      <a href="#"><img src={product1} alt="img" className='img-thumbnail' /></a>
                    </td>
                    <td className="product-name">
                      <a href="#">Lorem ipsum accessories one</a>
                    </td>
                    <td className="product-price-cart"><span className="amount old">€3.10</span><span className="amount">€2.79</span></td>
                    <td className="product-quantity">
                      <Form>
                        <InputGroup className="mb-3">
                          <Button variant="outline-secondary">-</Button>
                          <Form.Control aria-label="" value="1" />
                          <Button variant="outline-secondary">+</Button>
                        </InputGroup>
                      </Form>
                    </td>
                    <td className="product-subtotal">€3.67</td>
                    <td className="product-remove"><button><FaTimes /></button></td>
                  </tr>
                  <tr>
                    <td className="product-thumbnail">
                      <a href="#"><img src={product2} alt="img" className='img-thumbnail' /></a>
                    </td>
                    <td className="product-name">
                      <a href="#">Lorem ipsum accessories one</a>
                    </td>
                    <td className="product-price-cart"><span className="amount old">€3.10</span><span className="amount">€2.79</span></td>
                    <td className="product-quantity">
                      <Form>
                        <InputGroup className="mb-3">
                          <Button variant="outline-secondary">-</Button>
                          <Form.Control aria-label="" value="1" />
                          <Button variant="outline-secondary">+</Button>
                        </InputGroup>
                      </Form>
                    </td>
                    <td className="product-subtotal">€3.67</td>
                    <td className="product-remove"><button><FaTimes /></button></td>
                  </tr>
                  <tr>
                    <td className="product-thumbnail">
                      <a href="#"><img src={product3} alt="img" className='img-thumbnail' /></a>
                    </td>
                    <td className="product-name">
                      <a href="#">Lorem ipsum accessories one</a>
                    </td>
                    <td className="product-price-cart"><span className="amount old">€3.10</span><span className="amount">€2.79</span></td>
                    <td className="product-quantity">
                      <Form>
                        <InputGroup className="mb-3">
                          <Button variant="outline-secondary">-</Button>
                          <Form.Control aria-label="" value="1" />
                          <Button variant="outline-secondary">+</Button>
                        </InputGroup>
                      </Form>
                    </td>
                    <td className="product-subtotal">€3.67</td>
                    <td className="product-remove"><button><FaTimes /></button></td>
                  </tr>
                  <tr>
                    <td className="product-thumbnail">
                      <a href="#"><img src={product4} alt="img" className='img-thumbnail' /></a>
                    </td>
                    <td className="product-name">
                      <a href="#">Lorem ipsum accessories one</a>
                    </td>
                    <td className="product-price-cart"><span className="amount old">€3.10</span><span className="amount">€2.79</span></td>
                    <td className="product-quantity">
                      <Form>
                        <InputGroup className="mb-3">
                          <Button variant="outline-secondary">-</Button>
                          <Form.Control aria-label="" value="1" />
                          <Button variant="outline-secondary">+</Button>
                        </InputGroup>
                      </Form>
                    </td>
                    <td className="product-subtotal">€3.67</td>
                    <td className="product-remove"><button><FaTimes /></button></td>
                  </tr>
                  <tr>
                    <td className="product-thumbnail">
                      <a href="#"><img src={product1} alt="img" className='img-thumbnail' /></a>
                    </td>
                    <td className="product-name">
                      <a href="#">Lorem ipsum accessories one</a>
                    </td>
                    <td className="product-price-cart"><span className="amount old">€3.10</span><span className="amount">€2.79</span></td>
                    <td className="product-quantity">
                      <Form>
                        <InputGroup className="mb-3">
                          <Button variant="outline-secondary">-</Button>
                          <Form.Control aria-label="" value="1" />
                          <Button variant="outline-secondary">+</Button>
                        </InputGroup>
                      </Form>
                    </td>
                    <td className="product-subtotal">€3.67</td>
                    <td className="product-remove"><button><FaTimes /></button></td>
                  </tr>

                </tbody>
              </Table>




            </Col>
            <Col md="12">
              <div className="summary-wrap">
                <div className="summary-wrap__inner">
                  <dl className='list'>
                    <dt>Total Price:</dt>
                    <dd className='text-end'>$893.00</dd>
                  </dl>
                  <dl className='list'>
                    <dt>Discount:</dt>
                    <dd className='text-end'>-$60.00</dd>
                  </dl>
                  <dl className='list'>
                    <dt>Total:</dt>
                    <dd className='text-end h4'>$957.00</dd>
                  </dl>
                </div>
                <Button className="btn btn-primary w-100">Checkout</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </UserLayout>
  )
}

export default Cart