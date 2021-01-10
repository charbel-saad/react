import React ,{useState, Component}from 'react';
import Tweet from './tweet';
import Home from './home';
import CenterDetails from './center_details';
import BookingPage from './bookingPage';
import center1 from './images/center1.jpg';
import {CheckBox,CheckBox2} from './checkbox';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';


class App extends Component {


  render(){
return (
<Router>
  <div>  
    <Switch>
    <Route path="/" exact component={landingPage}/>    
  <Route path="/home" component={Home}/>
  <Route path="/details/:center_id" component={CenterDetails}/>
  <Route path="/booking" component={BookingPage}/>
  </Switch>

  </div>
</Router>
)}
}
const landingPage =() =>(
  <div> <h1>Landing Page  </h1></div>
);

export default App;
