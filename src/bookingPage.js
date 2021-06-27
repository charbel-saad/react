import React, { Component } from 'react';
import center_detail1 from './images/center_detail1.jpg';
import center from './images/center.jpg'
import logo_detail from './images/logo_detail.jpg';
import Booking_detail from './bookingDetail/bookingDetail';

import Calendar from 'react-calendar'; 
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './css/booking_page.css'

import Select from "react-select";





class BookingPage extends Component{

    constructor (props) {
        super(props);
        this.handleEmployee = this.handleEmployee.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleSelect =this.handleSelect.bind(this);
        this.state = {
            centers:[],
            ids:this.props.match.params.services_id.split(","),
            selectedDay: null,
            selectedTime: '',
            selectedEmployee: '',
        };
        
        
    }
    handleDayClick(day, { selected }) {
        this.setState({
          selectedDay: selected ? undefined : day,
        });
    }
    
    componentDidMount() {
        this.getCenters();
    }
    
    getCenters= _ => {
        fetch('http://localhost:4000/products')
          .then(response => response.json())
          .then(response => this.setState({ centers: response.data}))
          .catch(err =>console.error(err))
    }



    options = [
        { label: '10:00 AM', value: '10:00 AM' },
        { label: '10:30 AM', value: '10:30 AM' },
        { label: '11:00 AM', value: '11:00 AM' },
        { label: '11:30 AM', value: '11:30 AM' },
        { label: '12:00 PM', value: '12:00 PM' },
    ];

    employee = [
        {
            label:'Bill Gates' ,value:'Bill Gates'
        },
        {
            label:'John Smith' ,value:'John Smith'
        }
    ];
    handleEmployee(employee){
        this.setState(
          { selectedEmployee: employee});
        //   var modal = document.getElementById('time_select');
        //     modal.style.display='block';
          console.log(employee);
    };

    handleSelect(e){
        this.setState(
          { selectedTime: e });
          console.log(e);
    };



    
    renderBookingDetail= ()=>{
        return(
    <div>
        <div>
        
        <div>
           
           <div className="booking_page_p1"> 
           <div className="left1">  <p>Chemical Peel</p><p>50 minutes </p>   </div>
           <div className="left2">  25$ </div>
           <button className="left_trash"> <FontAwesomeIcon icon={faTrash} /> </button>
           
           
           </div>
       
       
           <div className="booking_table_case">
               <div className="right1">
               <div className="right1_part1">
                <p> {this.state.selectedTime.value } </p>
                   
       
               </div>
               <div className="right1_part2">
                   <p>{this.state.selectedDay
                   ? this.state.selectedDay.toLocaleDateString()
                   : 'Please select a day 👻'}   </p>
                   
               </div>
               </div>
               
               <div className="right2">
               <div className="right2_part1">
                   <p>Chemical Peeel </p>
                   <span>50 minutes </span>
       
               </div>
               <div className="right2_part2">
                   <p> 25$</p>
                   
                   
               </div>
       
               </div>
               <div className="right3">
               <div className="right3_part1">
                   <p>Employee </p>
       
               </div>
               <div className="right3_part2">
                   <p> {this.state.selectedEmployee.value}</p>
                   
                   
               </div>
       
               </div>
               <div className="right4">
               <div className="right4_part1">
                   <p>Order Total </p>
       
               </div>
               <div className="right4_part2">
                   <p> 25 $ </p>
                   
                   
               </div>
       
               </div>
               <div className="right5">
               <div className="right5_part1">
                   <p>Cancellation policy If you are unable to 
                   attend your booking you can cancel it but
                    please give the venue as much warning as possible. </p>
       
               </div>
       
               </div>
           </div>
                   <div className="booking_page_p2" >
           <label>Select Employee</label>
           <form>
           {/* <select className="employee_select" >
               <option></option>
               <option>Bill Gates</option>
           </select> */}
            
                
            
            <Select className="employee_select"
                    options={this.employee}
                    onChange={this.handleEmployee}
            />
    

       
           </form>
               <div className="calendar_part">
               <label>Select Time for your appointment</label>
               {/* <div className="calendar"> <Calendar value={this.value} onChange={(value, event) => alert('New date is: ', value)} /></div> */}
               <DayPicker  className="calendar"
               selectedDays={this.state.selectedDay}
               onDayClick={this.handleDayClick}
               initialMonth={new Date()}
       
       
               disabledDays={[
               new Date(2021, 0, 10),
               new Date(2021, 0, 9),
               {
                 after: new Date(2021, 0, 20),
                 before: new Date(2021, 0, 25),
               },
               {
                   daysOfWeek: [0,6]
               }
             ]}
           />
               </div>
               <div>
               <form> 
            <div >
           <Select className="time_select"
             options={this.options}
            // value={this.state.selectedTime}
            onChange={this.handleSelect}
            />
            </div>

       
           </form>
           </div>
       
       
           </div>
           
       
           </div>
                <button className="ready_btn"> READY</button>
            
        

        </div>
    </div>
        )}





    renderBooking = ()=>
    <div>

        <Booking_detail  data={this.state.ids} /> 
        {/* {this.renderBookingDetail()} */}
    </div>
            
   
    
       
    
render (){
    const {centers} = this.state;
    // let ID=this.props.match.parms.services_id;
    return(
        <div>
        <img className="img_detail" src={center} />
        <p class="text_img"> WELCOME TO OUR CENTER </p>
    <p className="text_img_small">WELCOME TO OUR CENTER</p>
        <img className="logo_detail" src={logo_detail} />
        <table className="detail_table">
        <tr>
                <th id="">TEST CENTER </th>
                <th id="">ABOUT </th>
                <th id=""> SERVICES </th>
                <th id="">PORTFOLIO</th>
            </tr>

        </table>
        <div className="booking_page_title">MY BASKET {this.state.ids}  </div>
        <div className="bookingDetail">
        {this.state.ids.map(this.renderBooking)}
        </div>

        </div>
    )
    }
}
export default BookingPage;