import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import './MainBreadCrumb.scss';

const MainBreadCrumb = ({ title }) => {
    return (
        <>
            <div className="page-header">

                <Container>
                    <Row className="">
                        <h1 className="heading-title">{title}</h1>
                        <Breadcrumb className="breadcrumb-nav d-flex justify-content-center">
                        <li className="breadcrumb-item"><Link  to="/">Home</Link></li>
                        <Breadcrumb.Item active>{title}</Breadcrumb.Item>
                    </Breadcrumb>
                    </Row>

                </Container>
            </div>
        </>
    )
}

export default MainBreadCrumb