import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import  { Component } from 'react'

export default class Grid extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
            <Col></Col>
            <Col></Col>
        </Row>
      </Container>
    )
  }
}
