import React, { useEffect, useState, Component } from "react";
import Adminbar from './AdminBar';
import  './assets/dashboardAdmin.css';
import  './assets/edit_admin_services.css';
import { Checkbox, Collapse } from 'antd';
import { MDBDataTable, MDBDataTableV5 } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faPlusSquare } from '@fortawesome/free-solid-svg-icons';



function EditAdminServices(props) {

    const [dtEvents,setDtEvents] = useState([]);
   const id=props.match.params.service_id;
   const [active,setActive]=useState(['yes']);
   
    const data=[
        {
        "id":id,
        'title':"Laser Hair Removal",
        'price':'30$',
        'time':'60 minutes',
        // 'active':active

    }]
    
    useEffect(()=>{
        getEvents();
      })
      
    const getEvents= _ => {
          fetch(`http://localhost:4000/edit/${id}`)
            .then(response => response.json())
            .then(response =>setDtEvents(response.data))
            .catch(err =>console.error(err))
    }
    const renderCenter = dtEvents.map((event,index)=>{
        // event.available=active;
        const act=active;        
        if (event.available =='yes') {
        event.available=act;

            return<div>
            <div className="admin_dt_box">
                <div className="admin_dt_contetnt">
                    <div> Service id  <p> {event.service_id}</p></div>
                    <div> Service Name  <p> {event.service_name}</p></div>
                    <div> Service Price  <p> {event.service_desc}</p></div>
                    <div> Time   <p> {event.duration}</p></div>
                    <div> Active   <p> {event.available}</p></div>
                    <div><input type="submit" value="deactivate" onClick={(e)=>{setActive('no');}} className="deactive_btn" /></div>
                    <button>Save </button>
                    {/* <div>{act}</div> */}
                    
                </div>
                
            </div>
        </div>
        } else {
        event.available=act;

            return<div>
        <div className="admin_dt_box">
            <div className="admin_dt_contetnt">
                <div> Service id  <p> {event.service_id}</p></div>
                <div> Service Name</div><p>{event.service_name}</p>
                <div> Service Price  <p> {event.service_desc}</p></div>
                <div> Time   <p> {event.duration}</p></div>
                <div> Active   <p> {event.available}</p></div>
                <div><input type="submit" value="activate" onClick={()=>{setActive('yes');}} className="active_btn"/></div>
                <button>Save </button>
                
            </div>
            
        </div>
    </div>
            
        }
        
    })







    return(
        <div>
            <div><Adminbar /></div>
    {/* <div style={{'margin-left':'200px'}}>{id}</div> */}
    <div>{renderCenter}</div>
        </div>
    )

}
export default EditAdminServices