import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router,NavLink } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import leaderboard from '../leaderboard';
import Dashboard from '../Dashboard';
import personaldetails from '../personaldetails';
import changepassword from '../changepassword';

class Navbar1 extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
  return (
    <div className="Navbar1">  
        <Router>
        <Navbar dark color="dark" expand="md">
          <div class="container-fluid">
          <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/"><img src='assets/images/gitamlogo.png' height="50" width="50"/>GITAM Bengaluru</NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                <span className="tab1"></span>
                    <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link active col-md-2" tag={Link}  to='/Dashboard' style={{color:"lightgreen"}}><span class="fa fa-home fa-lg"></span><br></br>Dashboard</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link " tag={Link} to='/personaldetails' style={{color:"lightgreen"}}><span class="fa fa-info fa-lg"></span><br></br>Personal Details</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link col-md-2" tag={Link} to='/caleder' style={{color:"lightgreen"}}><span class="fa fa-calendar"></span><br></br>Calender</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link " tag={Link} to={'/leaderboard'} style={{color:"lightgreen"}}><span class="fa fa-trophy"></span><br></br>Leader Board</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link " tag={Link} to='/changepassword' style={{color:"lightgreen"}}><span class="fa fa-key"></span><br></br>Change Password</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link col-md-2" tag={Link} to='/logout' style={{color:"lightgreen"}}><span class="fa fa-sign-out"></span><br></br>Logout</NavLink>
                            </NavItem>
                    </Nav>
                    
                
                <div className="p-2 welcome" >  
                  Welcome<br></br>Name
                </div>
                <img src='assets/images/gitamlogo.png' height="50" width="50"></img>
                </Collapse>
          </div>
        </Navbar>
        <Switch>
            <Route exact path="/leaderboard" component={leaderboard} />
            <Route exact path="/personaldetails" component={personaldetails} />
            <Route exact path="/changepassword" component={changepassword} />
        </Switch>
        </Router>
        </div>
        );
}
}

export default Navbar1;
