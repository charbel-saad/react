import React, { Component } from 'react';
import SideBar from './sidebar'
import  './assets/calendar.css';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin,{Draggable} from "@fullcalendar/interaction";
import DateTimePicker from 'react-datetime-picker';

// import SchedulerCalendar from 'scheduler-calendar'
// import 'scheduler-calendar/dist/index.css'

// import { Calendar, momentLocalizer } from 'react-big-calendar'
// import moment from 'moment'
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
// import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// const localizer = momentLocalizer(moment)
// const DnDCalendar = withDragAndDrop(Calendar);
import {Inject,ScheduleComponent,Day,Month,Week,WorkWeek,Agenda,EventSettingsModel,ViewDirective,ViewsDirective} from '@syncfusion/ej2-react-schedule';

const events=[
    { title :'charbel / event1' , start: '2021-02-02T14:30:00',color:'red'},
    { title: 'event 2', start: '2021-02-03T11:00:00' ,color:'green'}
]




class CalendarTest extends Component {

    constructor(props){
        super(props)
        this.state = {
          dt: '',
          value: new Date(),
          data:[
            {
              Id: 1,
              EndTime:new Date(2021,1,3,6),
              StartTime:new Date(2021,1,3,4), 
              Subject: 'charbel',
              bg_color:'red'
            },
            {
              Id: 2,
              EndTime:new Date(2021,1,4,6),
              StartTime:new Date(2021,1,4,4), 
              Subject: 'laser hair ',
              bg_color:'green'
              
            },{
              Id: 3,
              EndTime:new Date(2021,1,4,6),
              StartTime:new Date(2021,1,4,4), 
              Subject: 'charbel',
              bg_color:'blue'


            }
          ],
          dtEvents:[]
          
          
          
        }
        // this.eventTemplate=this.eventTemplate.bind(this),
        this.handleDateClick=this.handleDateClick.bind(this);
        this.onChange=this.onChange.bind(this);
    }


    componentDidMount() {
      this.getEvents();
    }
  
    getEvents= _ => {
      fetch('http://localhost:4000/events')
        .then(response => response.json())
        .then(response => this.setState({ dtEvents: response.data}))
        .catch(err =>console.error(err))
    }
    // localData: EventSettingsModel ={ 
    //   dataSource: [{
    //     Id: 1,
    //     EndTime:new Date(2021,1,3,6),
    //     StartTime:new Date(2021,1,3,4), 
    //     Subject: 'charbel'

    //   }]
    // }

    
    handleDateClick = (props) => { // bind with an arrow function
        console.log(props.event.id);
        
        
      }
    //   renderEventContent=(eventInfo)=>{
    //     console.log(eventInfo)
    //   }

    eventTemplate(props){
      return(<div style={{'background-color':props.bg_color}}>
          <div>
        <p>{props.title}</p>
        </div>

      </div>)
    }




    openForm=()=>{
      var modal = document.getElementById('id01');
      modal.style.display='block'
      
  
    }
    closeForm=()=>{
      var modal = document.getElementById('id01');
      modal.style.display='none'
    }
    onChange(e){
        this.setState({
          value: e
        });
    }





  render() {
    return(
        <div>
            <div> <SideBar /></div>
            <div id="id01" className="modal_add_calendar">
              <form className="modal_add_calendar-content animate" action="" method="post">
              <div className="modal_add_container"> 
              <label className="add_label_calendar" for="uname"><b>Title</b></label>
              <input className="add_input_calendar" type="text" placeholder="Enter Username" name="uname" required></input>
      
              <label  style={{'margin-left':'50px'}} className="add_label_calendar" for="reservation_date"><b>Date</b> </label>
              <input className="add_input_calendar" onClick={this.onChange} type="datetime-local"  name="reservation_date"/>
              {/* <DateTimePicker
              className="datetime"
                onChange={this.onChange}
                value={this.state.value}
              /> */}
              
      

              
              
              <div className="calendar_btn_div">
              <button  type="button" onClick={this.closeForm} className="cancelbtn">Cancel</button>
             <button  className="add_btn" type="submit">Add</button>
             </div>
             
              </div>
              
              
              </form>     



            </div>
            <div className="fullCalendar">
            <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet"/>
                <FullCalendar 
                height="1200px"
                plugins={[ dayGridPlugin,interactionPlugin]}
                initialView="dayGridMonth"
                weekends={false}
                events={this.state.dtEvents}
                eventClick={this.handleDateClick}
                dateClick={this.openForm}

                
                // eventContent={this.renderEventContent}
                
                eventStartEditable={true}
                // selectable= {true}
                />  
                
                {/* currentView="Month" */}

                {/* <ScheduleComponent height='900px'  selectedDate={new Date()}  
                eventSettings={{dataSource:this.state.data}} > */}
                  {/* <ViewsDirective>
                    <ViewDirective option='Day'></ViewDirective>
                    <ViewDirective option='Month'></ViewDirective>
                  </ViewsDirective> */}
                  {/* <Inject services={[Day,Month,Week,WorkWeek,Agenda]} />
                </ScheduleComponent> */}



             </div>
        </div>
    )
}
}


export default CalendarTest;