import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserLayout from '../../component/layout/UserLayout'
import MainBreadCrumb from '../../component/breadcrumb/MainBreadCrumb'

const Search = () => {
  return (
    <UserLayout>
      <MainBreadCrumb title="Search" />
      <section><Container><Row><Col md="12">Search</Col></Row></Container></section>
    </UserLayout>
  )
}

export default Search