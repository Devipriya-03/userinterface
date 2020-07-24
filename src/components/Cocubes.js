import React from 'react';
import {RadarExample} from './comp/Radar';
import { Card,CardTitle,CardSubtitle,CardText,Row,Col,Alert,Table } from 'reactstrap';

function Cocubes() {
  return (
    <div className="Cocubes"> 
		<Card className="Rounded p-3">
                <CardSubtitle align="left">Cocubes Analysis</CardSubtitle>
                <hr></hr>
                  <RadarExample/>
              </Card>
    </div>
   );
 }

export default Cocubes;