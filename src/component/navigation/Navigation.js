import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import Logo from '../../assets/logo.png';
import './Navigation.scss';
import { FaRegUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom";

const Navigation = () => {
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").classList.add("sticky");
    } else {
      document.getElementById("header").classList.remove("sticky");
    }
  }

  return (
    <>
      <Navbar expand="lg" id="header" bg="light" variant="light" fixed="top">
        <Container>
          <Link className="navbar-brand" to="/"><img src={Logo} alt="NewaStore" className='img-fluid' /></Link>
         
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="navbar-nav mx-auto navbar-nav">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/category">Category</Link>
              <Link className="nav-link" to="/product">Product</Link>
            </Nav>            
          </Navbar.Collapse>
          <div class="order-nav">
              <Link className="btn" to="/cart"><i class="mr-1"><FaShoppingCart /></i><span>5</span></Link>
              <Link className="btn" to="/like"><i class="mr-1"><FaHeart /></i><span>5</span></Link>
              <Link className="btn" to="/search"><i><FaSearch /></i></Link>
              <Link className="btn" to="/auth"><i><FaRegUser /></i></Link>
            </div>
        </Container>
      </Navbar>
    </>
  )
}
export default Navigation