import React from 'react';
import {BarExample} from './comp/SimpleBarchart';
import { Card,CardTitle,CardSubtitle,CardText,Row,Col,Alert,Table } from 'reactstrap';

function ARI() {
  return (
    <div className="ITA">  
      <div class="container-fluid">
          <Row>
            <Col md="12">
              <Card className="Rounded p-3">
                <CardSubtitle align="left">ITA</CardSubtitle>
                <hr></hr>
                <BarExample/>
              </Card>
            </Col>
          </Row>
        </div>  
      </div>
    );
  }
export default ARI;