import React, { Component } from 'react';
import services from './services.jpg'
import botox from './botox.jpg';
import './services.css';

class Services extends Component{
    constructor (props) {
        super(props);
        
        this.state = {
            service:[],
        };
    }
    componentDidMount() {
        this.getServices();
    }
    getServices= _ => {
        fetch('http://localhost:4000/services')
          .then(response => response.json())
          .then(response => this.setState({ service: response.data}))
          .catch(err =>console.error(err))
      }

    renderServices = ({service_id,service_name,service_description,duration,Contraindications,final_res,suitable_for,service_work,see_res,available})=>
    <div>
        <div className="services_col">
                        <img src={botox} style={{'width':'300px'}} />
                        <h3 className="service_col_title" >{service_name}</h3>
                        <div className="service_col_desc">{service_description}    </div>
                        <div className="service_col_btn"> <a ><button className="service_btn">BOOK NOW</button> </a> <a href={`/service-info`}><button className="service_btn">LEARN MORE</button></a> </div>
                    
                    
                    
        </div>


    </div>
         
    render(){
        const {service} = this.state;
        return(
            <div>
                <div><img src={services}   className="services_img" /></div> 
                <div className="mid">
                {service.map(this.renderServices)}
                    
                </div>

            </div>
        )
    }




}
export default Services