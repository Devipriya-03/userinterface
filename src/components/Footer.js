import React from 'react';
import { Card,CardTitle,CardSubtitle,CardText,Row,Col,Alert,Table } from 'reactstrap';

class Footer extends React.Component{
  render(){
  return (
    <div className="footer">  
      <footer>
        <div className="footer">
            <div className="footer1">
              <div>
                  Developers
              </div>
            </div>
            <div className="footer2">
                  <div className="container-fluid">
                    <Row>
                      <Col>
                        Siddharth Datthathreya
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6" md="6" sm="12">
                        Devi Priya
                      </Col>
                      <Col lg="6" md="6" sm="12">
                        Avinash Chunduri
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3" md="6" sm="12">
                        Soujanya Muthyala
                      </Col>
                      <Col lg="3" md="6" sm="12">
                        Sree Varsha
                      </Col>
                      <Col lg="3" md="6" sm="12">
                        Charan Varikuti
                      </Col>
                      <Col lg="3" md="6" sm="12">
                        Deepak Desai
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3" md="6" sm="12">
                        Madhu Priya
                      </Col>
                      <Col lg="3" md="6" sm="12">
                        Gulab Jain
                      </Col>
                      <Col lg="3" md="6" sm="12">
                        Sindhu Priya
                      </Col>
                      <Col lg="3" md="6" sm="12">
                        Nihanth Reddy
                      </Col>
                    </Row>
                  </div>
                  <div className="row justify-content-center">
                          <div className="text-center">
                              <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                              <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                              <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                              <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                              <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                              <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                          </div>
                  </div>
                  <div className="row justify-content-center">             
                      <div className="col-auto">
                          <p>Copyright GITAM,BENGALURU © 2020. All rights reserved.</p>
                      </div>
                  </div>
            </div>
        </div>
      </footer>
      </div>
  );
}
}

export default Footer;