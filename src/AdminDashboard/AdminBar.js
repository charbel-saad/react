import React, { Component } from 'react';
import ReactDOM from "react-dom";
import  './assets/sidebar.css';
import  './assets/dashboardAdmin.css';
import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText
  } from "@trendmicro/react-sidenav";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartLine, faArrowDown, faArrowCircleDown, faUserCircle, faPersonBooth, faUserAlt, faSortDown, faUserCog } from '@fortawesome/free-solid-svg-icons';
import omnielle_logo from './images/omnielle_logo.png';
import Dropdown from 'react-bootstrap/Dropdown';
import { useHistory } from "react-router";



class AdminBar extends Component{

  onLogout=()=>{
    localStorage.removeItem('myUser');
    window.location.href = '/';
  }
    render(){
        
        return(
            <div>
                <div>
               <SideNav 
      onSelect={selected => {
        // Add your code here
      }}
    >
      <SideNav.Toggle className="SideNav" />
      <SideNav.Nav >
        <NavItem eventKey="home">
          <NavIcon>
          <a href={'/AdminDash'}><FontAwesomeIcon icon={faHome} style={{"color":"white",'font-size':'22px'}} /></a>
          </NavIcon>
          <NavText style={{'font-size':'20px','color':'white'}}><a href={'/AdminDash'}>Dashboard</a></NavText>
        </NavItem>
        
      </SideNav.Nav>
    </SideNav>
    
    </div>
    <div className="dashboard_header">
            <img src={omnielle_logo}  className="dashboard_logo" />
           <div className="Dropdown">
            <Dropdown >
                <Dropdown.Toggle variant={{'background-color':'white'}} >
                <FontAwesomeIcon icon={faUserAlt} style={{"color":"black",'font-size':'14px','margin-right':'15px'}} />
                     {localStorage.getItem('myUser')}
                </Dropdown.Toggle>

                <Dropdown.Menu className="Dropdown_menu" >
                    <Dropdown.Item style={{'color':'black','font-size': '16px' ,'text-decoration':'none'}} ><p> <a onClick={this.onLogout} >Logout </a></p></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
        
        </div>
        






     </div>
        )
    }
}export default AdminBar