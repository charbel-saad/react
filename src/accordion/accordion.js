import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


const services=[
    {
        "_id": 1,
        "name": "Hair removal",
        "service":"Laser Hair Removal",
        "price":"30",
        "time":"60"

    },
    {
        "_id": 2,
        "name": "Anti Aging",
        "service":"Laser Hair Removal",
        "price":"30",
        "time":"60"

    },
    {
        "_id": 3,
        "name": "Body Care",
        "service":"Laser Hair Removal",
        "price":"30",
        "time":"60"

    },
    {
        "_id": 4,
        "name": "Cellulite and Stretch Marks",
        "service":"Laser Hair Removal",
        "price":"30",
        "time":"60"

    },
 ]

class AccordionStyle extends Component{
    constructor (props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            services_id: [],
             count: 0,
        };
        
    }
    
    // count=0;
    handleInputChange(event) {
        const id=localStorage.getItem('center_id');
        console.log(id)
        const target = event.target;
        var value = target.value;
        var ct= this.state.count;
        if(target.checked){
            
            this.state.services_id[value] = value;   
            console.log(this.state.services_id[value]);
            console.log(this.state.services_id)
            
            this.setState({
                count: ct + 1
            });
            console.log(this.state.count);
            
        }else{
            this.state.services_id.splice(value, 1);
            console.log(this.state.services_id);
            this.setState({
                count: ct - 1
            });
            console.log(this.state.count);
        }
        
        if(this.state.services_id !=''){
            var element = document.getElementById("detail_bt");
            element.classList.add("showBottom");
        }else{
            var element = document.getElementById("detail_bt");
            element.classList.remove("showBottom");
        }
    }
    
   render(){
       
   const {services_id}= this.state;
    return(

    <div >
            {services.map((value)=>(
                    <Accordion className="accordion_style"  allowZeroExpanded>
                
                    <AccordionItem >
                <AccordionItemHeading >
                    <AccordionItemButton style={{'background-color':this.state.color,'border-radius':'5px'}} >
                    {value.name}<span className="detail_id">{value._id}</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{'margin-bottom':'10px'}}>
                <div className="detail_service">{value.service}</div><span className="detail_time"> {value.time} minutes </span>
                    <span className="detail_price">{value.price}$</span><input className="detail_cb" value={value._id} type="checkbox" name="order" onChange={this.handleInputChange}   />
                </AccordionItemPanel>
                        </AccordionItem>
                </Accordion>
            ))}


        <div className=" detail_bottom" id="detail_bt"> 
            <div className="detail_book_title"><p> {this.state.count} services selected</p></div>
            <div className="detail_book_desc">you can add more or continue </div>
            <a href={`/booking/${services_id}`}><button className="detail_book_button">BOOK NOW</button></a>
           
        </div>
    </div>
   
    
        
        )
    }
    
}

export default AccordionStyle;