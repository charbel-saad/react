import React, { useEffect, useState, Component } from "react";
import Adminbar from './AdminBar';
import  './assets/dashboardAdmin.css';
import  './assets/edit_admin_services.css';
import { Checkbox, Collapse } from 'antd';
import { MDBDataTable, MDBDataTableV5 } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useHistory } from "react-router";



function AdminDetails(props) {

    const [centers,setCenters] = useState([]);
    const sub=props.match.params.center_sub;
   const id=props.match.params.center_id;
   const [active,setActive]=useState([sub]);
const history=useHistory();
   
    
    
    useEffect(()=>{
        getCenters();
      })
      
    const getCenters= _ => {
          fetch(`http://localhost:4000/centers/${id}`)
            .then(response => response.json())
            .then(response =>setCenters(response.data))
            .catch(err =>console.error(err))
    }
    const updateActive=()=>{
        axios.put("http://localhost:4000/update",{
           center_id: id,
           center_sub: active,
       })
       history.push('/AdminDash')


   
   }


    const renderCenter = centers.map((event,index)=>{
        // event.available=active;
        const act=active;        
        if (event.center_sub =='yes') {
        event.center_sub=act;

            return<div>
            <div className="admin_dt_box">
                <div className="admin_dt_contetnt">
                    <div> Service id  <p> {event.center_id}</p></div>
                    <div> Service Name  <p> {event.center_name}</p></div>
                    <div> Service Price  <p> {event.center_loc}</p></div>
                    <div> Active   <p> {event.center_sub}</p></div>
                    <div><input type="submit" value="deactivate" onClick={(e)=>{setActive('no');}} className="deactive_btn" /></div>
                   
                    <button onClick={()=>{
                    updateActive()
                }}>Save </button>
                    {/* <div>{act}</div> */}
                    
                    
                </div>
                <div className="admin_dt_buttons">
                            <button style={{'background-color':'#82A0C2'}}>Offers</button>
                           <a href={`/AdminDetails/${id}/services`}><button style={{'background-color':'#B5AFBC'}}>Services</button></a> 
                    </div>
                
            </div>
        </div>
        } else {
        event.center_sub=act;

            return<div>
        <div className="admin_dt_box">
            <div className="admin_dt_contetnt">
                <div> Service id  <p> {event.center_id}</p></div>
                <div> Service Name</div><p>{event.center_name}</p>
                <div> Service Price  <p> {event.center_loc}</p></div>
                <div> Active   <p> {event.center_sub}</p></div>
                <div><input type="submit" value="activate" onClick={()=>{setActive('yes');}} className="active_btn"/></div>
                <button onClick={()=>{
                    updateActive()
                }}>Save </button>

                
                
            </div>
            <div className="admin_dt_buttons">
                            <button style={{'background-color':'#82A0C2'}}>Offers</button>
                           <a href={`/AdminDetails/${sub}/${id}/services`}><button style={{'background-color':'#B5AFBC'}}>Services</button></a> 
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
export default AdminDetails