import React ,{Component}from 'react';
import SideBar from './sidebar'
import  './assets/mainConf.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from "react-select";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';



class Configuration extends Component{


    render(){
        return(
            <div> 
                <SideBar />
                <div className="dashboard_title_before">  CONFIGURATION</div>
                <div className="dashboard_title">  CONFIGURATION</div>


                <form>
                <div className="configuration"> 
                    <div className="configuration_col1">
                        <p className="configuration_title">Main Configuration</p>
                        <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'18px','margin-right':'5px'}} /></span>
                            <label className="configuration_sub_title">Time format</label>
                                
                            <Select className="configuration_select"
                                        options=""
                                        // value={this.state.selectedTime}
                                        onChange=""
                            />
                        
                        <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'18px','margin-right':'5px'}} /></span>
                            <label className="configuration_sub_title">Country Phone Prefix</label>
                                
                            <Select className="configuration_select"
                                        options=""
                                        // value={this.state.selectedTime}
                                        onChange=""
                            />
                        
                        
                        <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'18px','margin-right':'5px'}} /></span>
                            <label className="configuration_sub_title"> Mark as 'no-show' if cancelled until X hours before appointment</label>
                                
                            <Select className="configuration_select"
                                        options=""
                                        // value={this.state.selectedTime}
                                        onChange=""
                            />


                    </div>
                    <div className="configuration_col1">
                        <p className="configuration_title">Event</p>
                        <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'18px','margin-right':'5px'}} /></span>
                            <label className="configuration_sub_title">Minimum allowed time before service booking</label>
                                
                            <Select className="configuration_select"
                                        options=""
                                        // value={this.state.selectedTime}
                                        onChange=""
                            />
                        
                        <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'18px','margin-right':'5px'}} /></span>
                            <label className="configuration_sub_title">Maximum allowed time before service booking</label>
                                
                            <Select className="configuration_select"
                                        options=""
                                        // value={this.state.selectedTime}
                                        onChange=""
                            />


                    </div>
                    <div className="configuration_col1">
                        <p className="configuration_title">Event date and time related settings</p>
                        <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'18px','margin-right':'5px'}} /></span>
                            <label className="configuration_sub_title">Timeframe </label>
                                
                            <Select className="configuration_select"
                                        options=""
                                        // value={this.state.selectedTime}
                                        onChange=""
                            />
                        
                        <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'18px','margin-right':'5px'}} /></span>
                            <label className="configuration_sub_title">Allow service to extend over breaktime</label>
                                
                            <Select className="configuration_select"
                                        options=""
                                        // value={this.state.selectedTime}
                                        onChange=""
                            />
                        <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'18px','margin-right':'5px'}} /></span>
                            <label className="configuration_sub_title"> Allow service to extend over closing hours</label>
                                
                            <Select className="configuration_select"
                                        options=""
                                        // value={this.state.selectedTime}
                                        onChange=""
                            />
                        <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'18px','margin-right':'5px'}} /></span>
                            <label className="configuration_sub_title"> Monday is the first day of the week</label>
                                
                            <Select className="configuration_select"
                                        options=""
                                        // value={this.state.selectedTime}
                                        onChange=""
                            />
                        <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'18px','margin-right':'5px'}} /></span>
                            <label className="configuration_sub_title">Company timezone type</label>
                                
                            <Select className="configuration_select"
                                        options=""
                                        // value={this.state.selectedTime}
                                        onChange=""
                            />
                        <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'18px','margin-right':'5px'}} /></span>
                            <label className="configuration_sub_title"> Time zone</label>
                                
                            <Select className="configuration_select"
                                        options=""
                                        // value={this.state.selectedTime}
                                        onChange=""
                            />
                        <span><FontAwesomeIcon icon={faInfoCircle} style={{"color":"#ddd",'font-size':'18px','margin-right':'5px'}} /></span>
                            <label className="configuration_sub_title">Date format</label>
                                
                            <Select className="configuration_select"
                                        options=""
                                        // value={this.state.selectedTime}
                                        onChange=""
                            />

                        <button className="configuration_save">   Save system settings </button>
                    </div>
                
                
                
                
                
                </div>
                </form>







            </div>
        )
    }
}
export default Configuration