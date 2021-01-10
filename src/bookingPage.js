import React, { Component } from 'react';
import center_detail1 from './images/center_detail1.jpg';
import logo_detail from './images/logo_detail.jpg';
import Booking_detail from './bookingDetail/bookingDetail';

class BookingPage extends Component{

render (){
    return(
        <div>
        <img className="img_detail" src={center_detail1} />
        <p class="text_img"> WELCOME TO OUR CENTER </p>
        <img className="logo_detail" src={logo_detail} />
        <table className="detail_table">
        <tr>
                <th id="">TEST CENTER </th>
                <th id="">ABOUT </th>
                <th id=""> SERVICES </th>
                <th id="">PORTFOLIO</th>
            </tr>

        </table>
        <div className="booking_page_title">MY BASKET   </div>
        <div className="bookingDetail"> <Booking_detail /> </div>

        </div>
    )
    }
}
export default BookingPage;