import React, { Component } from 'react';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-calendar/dist/Calendar.css';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import Select from "react-select";

import center_detail1 from './center_detail1.jpg';
import logo_detail from './logo_detail.jpg';
import Calendar from 'react-calendar';

import '../css/booking_page.css'



class Booking_detail extends Component{




    constructor (props) {
        super(props);
        this.handleEmployee = this.handleEmployee.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleSelect =this.handleSelect.bind(this);
        this.state = {
            centers:[],
            selectedDay: null,
            selectedTime: '',
            selectedEmployee: '',
            data:this.props.data,
        };
    }
    handleDayClick(day, { selected }) {
        this.setState({
          selectedDay: selected ? undefined : day,
        });
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
    cancelBook(){
        console.log("cancel booking");

    }


    
    render(){
        const {centers} = this.state;
        return(
            <div>
        
        <div>
           
           <div className="booking_page_p1"> 
        <div className="left1">  <p>Chemical Peel{this.state.data}</p><p>50 minutes </p>   </div>
           <div className="left2">  25$ </div>
           <button className="left_trash" onClick={this.cancelBook}> <FontAwesomeIcon icon={faTrash} /> </button>
           
           
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
       
           <button className="ready_btn"> READY</button>
           </div>
           
       
           </div>
                
            
        

        </div>
            
        )
    }
    
}
export default Booking_detail;
