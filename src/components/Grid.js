import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cloud1 from '../images/cloud1.jpg';
import Cloud2 from '../images/cloud2.jpg';
import Cloud3 from '../images/cloud3.jpg';

import  { Component } from 'react'

export default class Grid extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
            <Col>
                <div>
                    <p>We have the equipment you need for your commercial needs. We have 2 universal presses.</p>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={Cloud1} alt='Cummalus Cloud'/>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div>
                    <img src={Cloud2} alt='Big cloud'/>
                </div>
            </Col>
            <Col>
                <div>
                    <p>Look at some of the testimonials from some of our customers</p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div>
                    <p>We have several customers we do commercial work for. You can check them out.</p>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={Cloud3} alt='Some of our customers'/>
                </div>
            </Col>
        </Row>
      </Container>
    )
  }
}
