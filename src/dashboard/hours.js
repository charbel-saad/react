import React ,{Component}from 'react';
import SideBar from './sidebar'
import Select from "react-select";
import  './assets/hours.css';



class OpeningHours extends Component{
    render(){
        return(
            <div>
                <SideBar />

                <div className="dashboard_title_before">   OPENING HOURS </div>
                <div className="dashboard_title">  OPENING HOURS </div>
                <form>
                    <div className="hours_content">
                        <div className="hours_column">
                            <label className="hours_label" >Day  </label>
                            <Select  className="hours_select" />

                        </div>
                        <div className="hours_column" style={{'margin-left':'120px'}}>
                            <label className="hours_label" >Open Time   </label>
                            <Select  className="hours_select" />

                        </div>
                        <div className="hours_column" style={{'margin-left':'120px'}}>
                            <label className="hours_label" >Close Time  </label>
                            <Select  className="hours_select" />

                        </div>
                        <div className="hours_column">
                            <button className="hours_add_btn">ADD </button>
                             
                        </div>
                        
                    </div>
                    <div className="hours_table">


                    </div>


                </form>

            </div>
        )
    }
}
export  default OpeningHours;
