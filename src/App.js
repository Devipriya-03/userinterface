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
import Dashboard from './Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    	<Navbar1 />
    	<Dashboard />
    	<Footer />
    </div>
  );
}

export default App;
