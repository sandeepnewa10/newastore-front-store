import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import About from "./page/about/About";
import Auth from "./page/auth/Auth";
import Cart from "./page/cart/Cart";
import Category from "./page/category/Category";
import Checkout from "./page/checkout/Checkout";
import Contact from "./page/contact/Contact";
import Home from './page/home/Home';
import PrivacyPolicy from "./page/privatePolicy/PrivacyPolicy";
import Product from "./page/product/Product";
import ReturnsAndRefunds from "./page/return/ReturnsAndRefunds";
import Search from "./page/search/Search";
import ShippingPolicy from "./page/shipping/ShippingPolicy";
import TermsAndCondition from "./page/termAndCondition/TermsAndCondition";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/product" element={<Product />} />
        <Route path="/returnsandrefuns" element={<ReturnsAndRefunds />} />
        <Route path="/search" element={<Search />} />
        <Route path="/Shippingpolicy" element={<ShippingPolicy />} />
        <Route path="/termsandcondition" element={<TermsAndCondition />} />        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
