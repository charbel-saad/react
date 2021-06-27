import React ,{Component}from 'react';
import SideBar from './sidebar'
import  './assets/basicInfo.css';
import Select from "react-select";
import MapContainer from './map';

class basicInformation extends Component{


    render(){
        return(
            <div>
                <SideBar />
                <div className="dashboard_title_before">  Information</div>
                <div className="dashboard_title">  Company Information </div>
                <div className="company_info_part1">
                    <label className="info_label"> Service Name</label>
                    <input type="text" name="" className="info_input" required  />

                    <label className="info_label"> Address 1</label>
                    <input type="text" name="" className="info_input" required  />

                    <label className="info_label"> Address 2</label>
                    <input type="text" name="" className="info_input" />

                    <label className="info_label"> City</label>
                    <input type="text" name="" className="info_input"  required />

                    <label className="info_label"> Post Code</label>
                    <input type="text" name="" className="info_input" required  />

                    <label className="info_label"> Country</label>
                    <Select  className="info_select" />

                    <label className="info_label"> Email</label>
                    <input type="text" name="" className="info_input" required  />

                    <label className="info_label"> Phone</label>
                    <input type="text" name="" className="info_input" required  />

                    <label className="info_label"> Website</label>
                    <input type="text" name="" className="info_input"   />

                    <label className="info_label"> Facebook</label>
                    <input type="text" name="" className="info_input"   />

                    <label className="info_label"> twiter</label>
                    <input type="text" name="" className="info_input"   />

                    <label className="info_label"> Instagram</label>
                    <input type="text" name="" className="info_input"   />

                    <label className="info_label"> Linkedin</label>
                    <input type="text" name="" className="info_input"   />

                    <button className="configuration_save" style={{'margin-top':'10px'}}> Save Information </button>
                    



                </div>
                <div className="company_info_part2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52655.40672970209!2d35.88139493820778!3d34.427696959228975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521f6ab9db89d33%3A0x323c52527dde8578!2z2LfYsdin2KjZhNiz!5e0!3m2!1sar!2slb!4v1567272326751!5m2!1sar!2slb" style={{'border':'0','width':'100%','height':'600px','frameborder':'0'}} ></iframe>



                </div>
                <MapContainer />
                {/* <Map
                    google={this.props.google}
                    center={{lat: 18.5204, lng: 73.8567}}
                    height='300px'
                    zoom={15}
                    /> */}
            </div>
        )
    }
}
export default basicInformation