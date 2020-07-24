import React from 'react';
import './App.css';
import { Navbar,NavbarBrand } from 'reactstrap';
import { Card,CardTitle,CardSubtitle,CardText,Row,Col,Alert,Table } from 'reactstrap';
import Collapsible from 'react-collapsible';
//import ReactSpeedometer from "react-d3-speedometer";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';


import Navbar1 from './components/Navbar1';
import studentdetails from './components/studentdetails';
import JobFitment from './components/JobFitment';
import CurrentJob from './components/CurrentJob';
import ARI from './components/ARI';
import Cocubes from './components/Cocubes';
import Amcat from './components/Amcat';
import ITA from './components/ITA';
import Footer from './components/Footer';



function Dashboard() {
  return (
    <div className="App">  
      <div className="backgrnd">  

        <studentdetails />
        <div class="container-fluid">
            <br></br>
            <Row>
              <Col md="4">
                <Card color="success" className="Rounded p-3">
                  <CardTitle align="left">90%</CardTitle>
                  <CardSubtitle align="left">Tenth Percentage</CardSubtitle>
                </Card>
              </Col>
              <Col md="4">
                <Card color="warning" className="Rounded p-3">
                  <CardTitle align="left">90%</CardTitle>
                  <CardSubtitle align="left">Inter Percentage</CardSubtitle>
                </Card>
              </Col>
              <Col md="4">
                <Card color="danger" className="Rounded p-3">
                  <CardTitle align="left">90%</CardTitle>
                  <CardSubtitle align="left">B Tech Percentage</CardSubtitle>
                </Card>
              </Col>
            </Row>
            <br></br>
          <Collapsible trigger="More Info">
          <br></br>
          <Row>
            <Col md="4">
              <Alert color="success" className="Rounded p-3">
                <CardTitle align="left">CSE</CardTitle>
                <CardSubtitle align="left">Branch</CardSubtitle>
              </Alert>
            </Col>
            <Col md="4">
              <Alert color="warning" className="Rounded p-3">
                <CardTitle align="left">A</CardTitle>
                <CardSubtitle align="left">Pass Category</CardSubtitle>
              </Alert>
            </Col>
            <Col md="4">
              <Alert color="danger" className="Rounded p-3">
                <CardTitle align="left">B</CardTitle>
                <CardSubtitle align="left">Section</CardSubtitle>
              </Alert>
            </Col>
          </Row>
          </Collapsible>
        </div>


        <br></br>

        <div class="container-fluid">
          <Row>
            <Col md="6" className="pr-2 pt-2">
              <JobFitment />
            </Col>
            <Col md="6" className="p-2">
              <CurrentJob />
            </Col>
          </Row>
        </div>
        <br></br>
        
        <ARI />

        <br></br>

        <div class="container-fluid">
          <Row>
            <Col md="6" className="p-2">
              <Cocubes />
            </Col>
            <Col md="6" className="p-2">
              <Amcat />
            </Col>
          </Row>
        </div>
        <br></br>

        <ITA />
        
        <br></br>
        <Table striped className="placements" bordered responsive>
            <thead>
              <tr>
                <th colspan="2">Placements Analysis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td md="6">
                  Total Number of Companies:50
                </td>
                <td md="6">
                  Number of written test cleared:0
                </td>
              </tr>
              <tr>
                <td md="6">
                  Number of Companies Attended:0
                </td>
                <td md="6">
                  Number of GD's cleared:0
                </td>
              </tr>
              <tr>
                <td md="6">
                  Number of Companies Eligible:50
                </td>
                <td md="6">
                  Number of technical test cleared:0
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  Number of Offer Letters:0
                </td>
              </tr>
            </tbody>
        </Table>
        <br></br>
        <br></br>
      <h6>Placements Analysis</h6>
      <Table className="placements" responsive striped>
        <thead>
          <tr>
            <th>Date</th>
            <th>Company Logo</th>
            <th>Company Name</th>
            <th>Attendance</th>
            <th>Written Test</th>
            <th>GroupDiscussion</th>
            <th>Technical Test</th>
            <th>Personal Interview</th>
          </tr>
        </thead>
        </Table>
      <br></br><br></br>

    
      </div>
    </div>
  );
}

export default Dashboard;
