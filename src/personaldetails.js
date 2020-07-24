import React,{Component} from 'react'; 
import FilesUploadComponent from './components/FilesUploadComponent';//import React from 'react';
import './App.css';
import { Card,CardTitle, CardSubtitle,Container,Row,Col,Alert,Collapse,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
class personaldetails extends Component { 
render() { 
    const isBackgroundRed = true;
	return ( 
    <div class="container" style={
      {
       border: '2px solid black'
       
      }
    }
  >
  <h1 align="center">Personal Details</h1>
            <Row>
              <Col>&nbsp;</Col>
            </Row>
            <Row>
              
              <Col md="3">
                <h6>USN</h6>
                <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>

                </Card>
              </Col>
              <Col md="3">
                <h6>Campus</h6>
                <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>
                </Card>
              </Col>
              <Col md="3">
                <h6>College</h6>
                <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>

                </Card>
              </Col>
              <>
    <span className="block-example border border-dark">
      
    <img src='assets/images/a.png' height="100" width="100" resizeMode= 'cover'></img>
    <p align="center">Mr.John</p>
    </span>
            </>
              </Row>
              <Row>
              <Col>&nbsp;</Col>
            </Row>
              
            <Row>
              <Col md="3">
              <h6>Batch</h6>
              <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>
                </Card>
              </Col>
              <Col md="3">
              <h6>Degree</h6>
              <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>
          
                </Card>
              </Col>
              <Col md="3">
              <h6>Program</h6>
              <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>
                </Card>
              </Col>
              <Col md="3">
              <h6>Branch</h6>
              <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>

                </Card>
              </Col>
              </Row>
              <Row>
              <Col>&nbsp;</Col>
            </Row>
            <Row>
              <Col>&nbsp;</Col>
            </Row>
            <Row>
              <Col md="3">
              <h6>Semester</h6>
              <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>
                </Card>
              </Col>
              <Col md="3">
              <h6>Section</h6>
              <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>
          
                </Card>
              </Col>
              <Col md="3">
              <h6>Student Phone Number</h6>
              <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>
          
                </Card>
              </Col>
              <Col md="3">
              <h6>Student Email</h6>
              <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>
                </Card>
              </Col>
             

              </Row>
              <Row>
              <Col>&nbsp;</Col>
            </Row>
            <Row>
              <Col>&nbsp;</Col>
            </Row>
            <Row>
              <Col md="3">
              <h6>First Name</h6>
              <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>
                </Card>
              </Col>
              <Col md="3">
              <h6>Middle Name</h6>
              <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>
          
                </Card>
              </Col>
              <Col md="3">
              <h6>Last Name</h6>
              <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>

                </Card>
              </Col>
              <Col md="3">
              <h6>DOB</h6>
              <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>

                </Card>
              </Col>
              </Row>
              <Row>
              <Col>&nbsp;</Col>
            </Row>
            <Row>
              <Col>&nbsp;</Col>
            </Row>
            <Row>
              
              <Col md="3">
              <h6>Gender</h6>
              <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>
          
                </Card>
              </Col>
              <Col md="3">
              <h6>Blood Group</h6>
              <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>

                </Card>
              </Col>
              <Col md="3">
              <h6>Fathers Name</h6>
              <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>
                </Card>
              </Col>
              <Col md="3">
              <h6>Mothers Name</h6>
              <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>
          
                </Card>
              </Col>
              </Row>
              <Row>
              <Col>&nbsp;</Col>
            </Row>
            <Row>
              <Col>&nbsp;</Col>
            </Row>
            <Row>
            <Col md="3">
              <h6>Parents Email</h6>
              <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>

                </Card>
              </Col>
              <Col md="3">
              <h6>Reservation category</h6>
              <Card color="white" className="Rounded p-0">
                <p align="middle">xxxx</p>

                </Card>
              </Col>
              </Row>
              <Row>
              <Col>&nbsp;</Col>
            </Row>
            <Row>
              <Col>&nbsp;</Col>
            </Row>
              <Row>
              <Col md="6">
              <h3>Cover Letter</h3>
              <FilesUploadComponent />
              </Col>
              <Col md="6">
              <h3>Resume</h3>
              <FilesUploadComponent />
              </Col>
            </Row>
            <Row>
              <Col>&nbsp;</Col>
            </Row>
            <Row>
              <Col>&nbsp;</Col>
            </Row>
    
    </div> 
            
		  
		 
				
		 
	); 
	} 
} 

export default personaldetails; 
