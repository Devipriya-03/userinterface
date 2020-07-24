import React from 'react';
import { Card,CardTitle,CardSubtitle,CardText,Row,Col,Alert,Table } from 'reactstrap';
function JobFitment() {
  return (
    <div className="JobFitment">  
		<Card className="Rounded p-3">
                <CardSubtitle align="left">Job Fitment</CardSubtitle>
                <hr></hr>
                <br></br>
                
                <CardText>
                Description : You are 75 % suitable
                to the industry with your current performance
                in all the tests conducted by T&P
                </CardText>
              </Card>
    </div>
    );
}
export default JobFitment;