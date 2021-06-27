import React, { Component } from 'react';
import ReactDOM from "react-dom";
import  './assets/sidebar.css';
import  './assets/dashboard.css';
import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText
  } from "@trendmicro/react-sidenav";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartLine, faArrowDown, faArrowCircleDown, faUserCircle, faPersonBooth, faUserAlt, faSortDown, faUserCog } from '@fortawesome/free-solid-svg-icons';
import omnielle_logo from './assets/images/omnielle_logo.png';
import Dropdown from 'react-bootstrap/Dropdown';
import { useHistory } from "react-router";



class SideBar extends Component{

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
          <a href={'/dashboard'}><FontAwesomeIcon icon={faHome} style={{"color":"white",'font-size':'22px'}} /></a>
          </NavIcon>
          <NavText style={{'font-size':'20px','color':'white'}}><a href={'/dashboard'}>Dashboard</a></NavText>
        </NavItem>
        <NavItem eventKey="Manage">
          <NavIcon>
          <a href={'/dashboardServices'}><FontAwesomeIcon icon={faChartLine} style={{"color":"white",'font-size':'22px'}} /></a>

          </NavIcon>
          <NavText style={{'font-size':'20px','color':'white'}}>Manage<FontAwesomeIcon icon={faSortDown} style={{"color":"white",'font-size':'25px','margin-left':'50px'}} /></NavText>
          <NavItem eventKey="Manage/services">
            <NavText style={{'font-size':'20px','color':'white','height':'50px'}}><a href={'/dashboardServices'} style={{'color':'white'}}>Services</a></NavText>
          </NavItem>
          <NavItem eventKey="Manage/Employees">
            <NavText style={{'font-size':'20px','color':'white','height':'50px'}}><a href={'/EmployeePage'}style={{'color':'white'}}>Employees</a></NavText>
          </NavItem>
          <NavItem eventKey="Manage/Clients">
            <NavText style={{'font-size':'20px','color':'white','height':'50px'}}>Clients</NavText>
          </NavItem>
          <NavItem eventKey="Manage/Calendar">
            <NavText style={{'font-size':'20px','color':'white','height':'50px'}}><a href={'/Calendar'}style={{'color':'white'}}>Calendar</a></NavText>
          </NavItem>
          <NavItem eventKey="Manage/Opening Hours">
            <NavText style={{'font-size':'20px','color':'white','height':'50px'}}><a href={'/OpeningHours'}style={{'color':'white'}}>Opening Hour </a></NavText>
          </NavItem>
          <NavItem eventKey="Manage/Special">
            <NavText style={{'font-size':'20px','color':'white','height':'50px'}}>Special days</NavText>
          </NavItem>
          <NavItem eventKey="Manage/Offers">
            <NavText style={{'font-size':'20px','color':'white','height':'50px'}}><a href={'/dashboardOffer'}style={{'color':'white'}}> Offers </a></NavText>
          </NavItem>
        </NavItem>

        <NavItem eventKey="Settings">
          <NavIcon>
          <a href={'/Configuration'}style={{'color':'white'}}><FontAwesomeIcon icon={faUserCog} style={{"color":"white",'font-size':'22px'}} /></a>
          </NavIcon>
          <NavText style={{'font-size':'20px','color':'white'}}>Settings<FontAwesomeIcon icon={faSortDown} style={{"color":"white",'font-size':'25px','margin-left':'50px'}} /></NavText>
          <NavItem eventKey="Manage/General">
            <NavText style={{'font-size':'20px','color':'white','height':'50px'}}><a href={'/Configuration'}style={{'color':'white'}}> General </a></NavText>
          </NavItem>
          <NavItem eventKey="Manage/Account">
            <NavText style={{'font-size':'20px','color':'white','height':'50px'}}><a href={'/basicInformation'}style={{'color':'white'}}> Account </a></NavText>
          </NavItem>
          <NavItem eventKey="Manage/Company">
            <NavText style={{'font-size':'20px','color':'white','height':'50px'}}>Company</NavText>
          </NavItem>
          
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
}export default SideBar