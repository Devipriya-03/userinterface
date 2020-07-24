import React from 'react';
import {BarChart} from './comp/Barchart';
import { Card,CardTitle,CardSubtitle,CardText,Row,Col,Alert,Table } from 'reactstrap';

function ARI() {
  return (
    <div className="ARI">  
      <div class="container-fluid">
          <Row>
            <Col sm="12">
              <Card className="Rounded p-3">
                <CardSubtitle align="left">ARI</CardSubtitle>
                <hr></hr>
                <BarChart/>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
  );
}

export default ARI;