import React, { Component } from 'react';
import SideBar from './sidebar'
import  './assets/dashboard_services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
// import 'react-accessible-accordion/dist/fancy-example.css';
import Select from "react-select";


class DashboardServices extends Component{
     myFunction=()=> {
        // Declare variables
        var input, filter, ul, li, a, i;
        input = document.getElementById("mySearch");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myMenu");
        li = ul.getElementsByTagName("li");
      
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }
    render(){
        return(
            <div>
                <div> <SideBar /></div>
                <div className="dashboard_title_before">  SERVICES</div>
                <div className="dashboard_title">  SERVICES</div>
                
                <div className="dashboard_content">
                    <div className="dash_left">   
                        <div className="dash_left_part1">
                            <input type="text" id="mySearch" onChange={this.myFunction} placeholder="Search.." title="Type in a category"></input>
                             <button className="dash_add_btn" > + </button>       

                        </div>
                        <div className="dash_left_part2">
                        <ul id="myMenu">
                                    <li><a href={`/EditDashboardServices/${1}`}>Service1</a></li>
                                    <li><a href="#">Service2</a></li>
                                    <li><a href="#">Service3</a></li>
                                    <li><a href="#">Service </a></li>
                                    <li><a href="#">Laser service</a></li>
                                    <li><a href="#">Massage </a></li>
                                    </ul>


                        </div>
                    </div>
                    <div className="dash_right">
                    <Accordion  style={{'border':'1px solid #ddd','background-color':'white','border-radius':'5px'}} allowZeroExpanded>
                
                    <AccordionItem >
                <AccordionItemHeading style={{'background-color':'white'}} className="dash_accordion">
                    <AccordionItemButton style={{'background-color':'white'}} >
                   <span style={{'font-size':'18px','font-weight':'bold'}}>Services Details</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordion_services_panel" >
                        <form id="serviceForm">
                            <div className="accordion_services_name">
                                <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'20px'}} /></span>
                                <label className="accordion_title"> Service Name</label>
                                <input type="text" name="" className="accordion_name_input"  />


                            </div>
                            <div className="accordion_services_name">
                                <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'20px'}} /></span>
                                <label className="accordion_title"> Service Description</label>
                                <textarea name="" form="serviceForm" className="accordion_name_input"  style={{'height':'100px'}}></textarea>

                            </div>
                            <div className="accordion_services_name">
                                <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'20px'}} /></span>
                                <label className="accordion_title">Display Service on the booking page</label>
                                <input type="checkbox" style={{'margin-left':'20px','width':'20px'}} defaultChecked="true"/>

                            </div>
                            <div className="accordion_services_name">
                                <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'20px','margin-left':'-305px'}} /></span>
                                <label className="accordion_title" style={{'margin-left':'10px'}}>Price</label>
                                <input type="number" className="accordion_name_input" style={{'width':'300px','float':'left','margin-top':'30px'}}/>
                                <div className="accordion_currency"> <p >LBP</p></div>

                            </div>
                            <div className="accordion_services_name">
                                <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'20px'}} /></span>
                                <label className="accordion_title">Service sales tax</label>
                                
                                    <Select className="sale_tax_select"
                                        options=""
                                        // value={this.state.selectedTime}
                                        onChange=""
                                    />

       
           
                            </div>
                            <button className="accordion_cancel_btn"> cancel  </button> 
                            <button className="accordion_save_btn"> Save  </button>




                        </form>
                </AccordionItemPanel>
                        </AccordionItem>
                </Accordion>


                <Accordion  style={{'border':'1px solid #ddd','background-color':'white','border-radius':'5px'}} allowZeroExpanded>
                
                    <AccordionItem >
                <AccordionItemHeading style={{'background-color':'white'}} className="dash_accordion">
                    <AccordionItemButton style={{'background-color':'white'}} >
                   <span style={{'font-size':'18px','font-weight':'bold'}}>Time Details</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordion_time_panel" >
                        <form id="serviceForm">
                            
                            <div className="accordion_services_name">
                                <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'20px'}} /></span>
                                <label className="accordion_title">Service Duration</label>
                                
                                    <Select className="sale_tax_select"
                                        options=""
                                        // value={this.state.selectedTime}
                                        onChange=""
                                    />

       
           
                            </div>
                            <button className="accordion_cancel_btn"> cancel  </button> 
                            <button className="accordion_save_btn"> Save  </button>




                        </form>
                </AccordionItemPanel>
                        </AccordionItem>
                </Accordion>




                <Accordion  style={{'border':'1px solid #ddd','background-color':'white','border-radius':'5px'}} allowZeroExpanded>
                
                    <AccordionItem >
                <AccordionItemHeading style={{'background-color':'white'}} className="dash_accordion">
                    <AccordionItemButton style={{'background-color':'white'}} >
                   <span style={{'font-size':'18px','font-weight':'bold'}}>Service Categories</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordion_time_panel" >
                        <form id="serviceForm">
                            
                            <div className="accordion_services_name">
                                <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'20px'}} /></span>
                                <label className="accordion_title">Position of service on the list </label>
                                
                                    <Select className="categories_select"
                                        options=""
                                        // value={this.state.selectedTime}
                                        onChange=""
                                    />

       
           
                            </div>
                            <button className="accordion_cancel_btn"> cancel  </button> 
                            <button className="accordion_save_btn"> Save  </button>




                        </form>
                </AccordionItemPanel>
                        </AccordionItem>
                </Accordion>





                    </div>




                </div>
            </div>
        )
    }
}
export default DashboardServices