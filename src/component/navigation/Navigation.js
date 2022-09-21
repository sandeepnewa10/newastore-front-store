import React from 'react';
import { Container, Navbar, Nav, a } from "react-bootstrap";
import Logo from '../../assets/logo.png';
import './Navigation.scss';
import { FaRegUser, FaSearch, FaHeart } from "react-icons/fa"
import { RiShoppingCart2Line } from "react-icons/ri"
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" bg="light" variant="light" fixed="top">
        <Container>
        <Link className="navbar-brand" to="/"><img src={Logo} alt="Tech Chhen" className='img-fluid' /></Link>         
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Nav className="navbar-nav mx-auto navbar-nav">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/category">Category</Link>
              <Link className="nav-link" to="/product">Product</Link>
            </Nav>

            <div class="order-nav">
            <Link className="btn" to="/cart">
                <i class="mr-1"><RiShoppingCart2Line /></i><span>5</span></Link>
              <a class="btn">
                <i class="mr-1"><FaHeart /></i><span>5</span></a>
                <Link className="btn" to="/search"><i> <FaSearch /></i></Link>
             <Link className="btn" to="/auth"><i><FaRegUser /></i></Link></div>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    
    </>
  )
}

export default Navigation