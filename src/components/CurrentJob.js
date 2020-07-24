import React from 'react';
import {DoughnutExample} from './comp/Doughnut';
import { Card,CardTitle,CardSubtitle,CardText,Row,Col,Alert,Table } from 'reactstrap';

function CurrentJob() {
  return (
    <div className="CurrentJob">  
        <Card className="Rounded p-3">
                <CardSubtitle align="left">Current Job Suitability</CardSubtitle>
                <hr></hr>
                <div class="container-fluid">
                  <Row>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Analyst
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      CustomerSales
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Plant Engineer
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      RRD Engineer
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Network Engineer
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Operations Engineer
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Software Developer
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Software Engineer
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Software Tester
                    </Col>
                  </Row>
                </div>
              </Card>
          </div>
          );
        }
export default CurrentJob;