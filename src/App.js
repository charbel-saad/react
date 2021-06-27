import React ,{useState, Component}from 'react';
import Tweet from './tweet';
import Home from './home';
import CenterDetails from './center_details';
import BookingPage from './bookingPage';
import Quiz from './quiz/gender';
import question2 from './quiz/question2';
import question3 from './quiz/question3';
import question4 from './quiz/question4';
import question5 from './quiz/question5';
import question6 from './quiz/question6';
import question7 from './quiz/question7';
import question8 from './quiz/question8';
import Services from './services/services'
import ServicesInfo from './services/service_info'
import Dashborad from './dashboard/dashboard';
import DashboradServices from './dashboard/dashboard_services';
import EditDashboardServices from './dashboard/EditDashboardServices';
import EmployeePage from './dashboard/employee';
import CalendarTest from './dashboard/calendar';
import Configuration from './dashboard/mainConf';
import basicInformation from './dashboard/basicInformation';
import Offers from './dashboard/offer';
import OpeningHours from './dashboard/hours';
import Login from './login/login';
import LandingPage from './testFilter';
import AdminDash from './AdminDashboard/Admin';
import AdminDetails from './AdminDashboard/adminDetails';
import ControllServices from './AdminDashboard/adminServices';
import EditAdminServices from './AdminDashboard/edit_admin_Services';
import TestEdit from './dashboard/testedit';


import center1 from './images/center1.jpg';
import {CheckBox,CheckBox2} from './checkbox';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';


class App extends Component {


  render(){
return (
<Router>
  <div>  
    <Switch>
    {/* <Route path="/" exact component={landingPage}/>     */}
    <Route path="/" exact component={Login}/>    
  <Route path="/home" component={Home}/>
  <Route path="/details/:center_id" component={CenterDetails}/>
  <Route path="/booking/:services_id" component={BookingPage}/>
  <Route path="/quiz" component={Quiz}/>
  <Route path="/question2/:gender" exact component={question2}/>
  <Route path="/question2/:gender/question3/:age" exact component={question3}/>
  <Route path="/question2/:gender/question3/:age/question4/:skin" exact component={question4}/>
  <Route path="/question2/:gender/question3/:age/question4/:skin/question5/:sensitive" exact component={question5}/>
  <Route path="/question2/:gender/question3/:age/question4/:skin/question5/:sensitive/question6/:stress" exact component={question6}/>
  <Route path="/question2/:gender/question3/:age/question4/:skin/question5/:sensitive/question6/:stress/question7/:concern" exact component={question7}/>
  <Route path="/question2/:gender/question3/:age/question4/:skin/question5/:sensitive/question6/:stress/question7/:concern/question8/:routine" exact component={question8}/>
  <Route path="/services" component={Services}/>
  <Route path="/service-info" component={ServicesInfo}/>
  <Route path="/dashboard" component={Dashborad}/>
  <Route path="/dashboardServices" exact component={DashboradServices}/>
  <Route path="/EditdashboardServices/:center_id" component={EditDashboardServices}/>
  <Route path="/EmployeePage" component={EmployeePage}/>
  <Route path="/Calendar" component={CalendarTest}/>
  <Route path="/Configuration" component={Configuration}/>
  <Route path="/basicInformation" component={basicInformation}/>
  <Route path="/OpeningHours" component={OpeningHours}/>
  <Route path="/dashboardOffer" component={Offers}/>
  <Route path="/LandingPage" component={LandingPage}/>
  <Route path="/AdminDash" component={AdminDash}/>
  <Route path="/AdminDetails/:center_sub/:center_id" exact component={AdminDetails}/>
  <Route path="/AdminDetails/:center_sub/:center_id/services" exact component={ControllServices}/>
  <Route path="/AdminDetails/:center_id/services/:service_id/:available" component={EditAdminServices}/>
  <Route path="/TestEdit" component={TestEdit}/>




  
  </Switch>

  </div>
</Router>
)}
}
const landingPage =() =>(
  <div> <h1>Landing Page  </h1></div>
);

export default App;
