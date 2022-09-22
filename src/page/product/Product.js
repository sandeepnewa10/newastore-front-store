import React from "react";
import UserLayout from '../../component/layout/UserLayout'
import MainBreadCrumb from '../../component/breadcrumb/MainBreadCrumb'
import { Container, Row, Col, FormLabel, Form, Button } from 'react-bootstrap'
import product1 from '../../assets/product/product1.jpg';
import product2 from '../../assets/product/product2.jpg';
import product3 from '../../assets/product/product3.jpg';
import product4 from '../../assets/product/product4.jpg';
import product5 from '../../assets/product/product5.jpg';
import product6 from '../../assets/product/product6.jpg';
import product7 from '../../assets/product/product7.jpg';
import './Product.scss';




const Product = () => {
  return (
    <UserLayout>
      <MainBreadCrumb title="Product" />
      <section className='product-template'>
        <Container>
          <Row>
            <aside className="col-md-6">
              <article className='gallery-wrap'>
                <a href="/#" className='big-image'>
                  <img src={product7} alt="" />
                </a>
                <div className="thumb-wrap">

                  <a href="/#" className='item-thumb'>
                    <img src={product1} alt="product" />
                  </a>
                  <a href="/#" className='item-thumb'>
                    <img src={product2} alt="product" />
                  </a>
                  <a href="/#" className='item-thumb'>
                    <img src={product3} alt="product" />
                  </a>
                  <a href="/#" className='item-thumb'>
                    <img src={product4} alt="product" />
                  </a>
                  <a href="/#" className='item-thumb'>
                    <img src={product5} alt="product" />
                  </a>
                  <a href="/#" className='item-thumb'>
                    <img src={product6} alt="product" />
                  </a>

                </div>
              </article>
            </aside>
            <Col sm="12" md="6" lg="5">
              <article className='product-detail-page__detail'>
                <h4>Product title</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
                  eaque aliquam expedita quisquam laborum ab incidunt delectus repudiandae
                  architecto quia inventore, blanditiis sed nisi! Quis ratione voluptatibus
                  atque molestias nostrum.</p>
                <div className="mb-3">
                  <FormLabel>Color</FormLabel>
                  <div> <label class="checkbox-btn mx-1"> <input type="radio" name="choose_22" />
                    <span class="btn btn-light"> Orange </span> </label>
                    <label class="checkbox-btn mx-1"> <input type="radio" name="choose_22" />
                      <span class="btn btn-light"> Green </span> </label>
                    <label class="checkbox-btn mx-1"> <input type="radio" name="choose_22" />
                      <span class="btn btn-light"> Black </span> </label>
                    <label class="checkbox-btn mx-1"> <input type="radio" name="choose_22" />
                      <span class="btn btn-light"> White </span> </label>

                  </div> </div>
                <div className="mb-3">

                  <Form.Select aria-label="Default select example">
                    <option disabled selected>Size</option>
                    <option value="1">XS</option>
                    <option value="2">s</option>
                    <option value="3">M</option>
                    <option value="1">L</option>
                    <option value="2">XL</option>
                  </Form.Select>
                </div>
                <div className="mb-3">
                  <div class="input-group">
                    <button type="button" class="btn btn-secondary"><i class="fa-solid fa-minus"></i></button>
                    <input type="text" class="form-control text-center" readOnly="" placeholder='' value="14" />
                    <button type="button" class="btn btn-secondary"><i class="fa-solid fa-plus"></i></button>
                  </div>
                </div>
                <div className="mb-4">
                  <Button className='btn btn-primary mb-3'>ADD TO CART</Button>
                </div>
              </article>

            </Col>
          </Row>
        </Container>
      </section>
    </UserLayout>
  )
}

export default Product