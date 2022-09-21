import React from 'react'
import image1 from "../../assets/banner-1.jpg";
import image2 from "../../assets/banner-2.jpg";
import image3 from "../../assets/banner-3.jpg";
import image4 from "../../assets/banner-4.jpg";
import './Feature.scss';

const Feature = () => {
    return (
        <section className="feature">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="feature__inner">
                                    <div className="feature__inner-img">
                                        <img
                                            className="img-fluid"
                                            src={image1}
                                            alt="First slide"
                                        /></div>
                                    <div className="feature__inner-title">
                                        <h2> Feature 1</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feature__inner"> <div className="feature__inner-img">
                                    <img
                                        className="img-fluid"
                                        src={image2}
                                        alt="First slide"
                                    />
                                </div>
                                    <div className="feature__inner-title">
                                        <h2> Feature 2</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="feature__inner">
                                    <div className="feature__inner-img">
                                        <img
                                            className="img-fluid"
                                            src={image3}
                                            alt="First slide"
                                        />
                                    </div>
                                    <div className="feature__inner-title">
                                        <h2> Feature 1</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature__inner">
                            <div className="feature__inner-img">
                                <img
                                    className="img-fluid"
                                    src={image4}
                                    alt="First slide"
                                />
                            </div>
                            <div className="feature__inner-title">
                                <h2> Feature 4</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature