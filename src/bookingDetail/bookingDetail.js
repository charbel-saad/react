import React, { Component } from 'react';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar'

const Booking_detail= () =>{

return(
<div>
    <div className="booking_page_p1"> 
    <div className="left1">  <p>Chemical Peel</p><span>50 minutes </span>   </div>
    <div className="left2">  25$ </div>
    <button className="left_trash"> <FontAwesomeIcon icon={faTrash} /> </button>
    
    
    </div>


    <div className="booking_table_case">
        <div className="right1">
        <div className="right1_part1">
            <p>TIME </p>
            

        </div>
        <div className="right1_part2">
            <p>11 January   </p>
            <span>Monday</span>
            
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
            <p> Bill Gates</p>
            
            
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
    <select className="employee_select" >
        <option></option>
        <option>Bill Gates</option>
    </select>

    </form>
        <div className="calendar_part">
        <label>Select Time for your appointment</label>
        <div className="calendar"> <Calendar /></div>
        </div>
        
        <form> 
    <select   className="time_select" >
        <option>Select Time </option>
        <option>Bill Gates</option>
    </select>

    </form>
    <button className="ready_btn"> READY</button>


    </div>
    

</div>
)
}
export default Booking_detail;
