import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../assets/slide1.jpg";
import image2 from "../../assets/slide2.jpg";
import image3 from "../../assets/slide3.jpg";
import image4 from "../../assets/slide4.jpg";
import './Slider.scss';

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <section className="slider">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="w-100"
                            src={image1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>First slide label</h2>
                            <span>Nulla vitae elit libero</span>
                            <button className="btn-default">Shop now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="w-100"
                            src={image2}
                            alt="First slide"
                        />

                        <Carousel.Caption>
                            <h2>Second slide label</h2>
                            <span>Lorem ipsum dolor sit amet</span>
                            <button className="btn-default">Shop now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="w-100"
                            src={image3}
                            alt="First slide"
                        />

                        <Carousel.Caption>
                            <h2>Third slide label</h2>
                            <span>
                                Praesent commodo cursus magna
                            </span>
                            <button className="btn-default">Shop now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="w-100"
                            src={image4}
                            alt="First slide"
                        />

                        <Carousel.Caption>
                            <h2>Third slide label</h2>
                            <span>
                                Praesent commodo cursus magna
                            </span>
                            <button className="btn-default">Shop now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        </>
    )
}

export default Slider