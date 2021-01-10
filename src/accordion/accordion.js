import React, { Component } from 'react';
import { Redirect } from 'react-router';
var count =0;
const Accordion =({title,service,time,price, Active , setActive,isChecked}) =>{
  
     isChecked =false;
     
     function onChange() {
        if(isChecked ==false){
            isChecked = true;
            
                var element = document.getElementById("detail_bt");
                element.classList.add("showBottom");
            
            console.log(count);
            count ++;
            console.log(isChecked);
            console.log(count);
            
        }else if(count >=0 && isChecked ==true){
            isChecked = false;
            if(count<=0){
                var element = document.getElementById("detail_bt");
            element.classList.remove("showBottom");
            }
            
        count --;
        console.log(isChecked);
        console.log(count);
        }
    }
    //    eventListener
   if (service !="") {
       
   
    return(
    
    <div >
        <div className="accordion">
            
                <div onClick={() => setActive(title)} className="accordionHeading">
                
                <p className="spacing"></p>{title}
    
                </div>

        <div className={(Active === title ? "show" : "" ) + " accordionContent"} >
           
            <div className="container">
            <div className="detail_service">{service}</div><span className="detail_time"> {time} minutes </span>
                <span className="detail_price">{price}$</span><input className="detail_cb" type="checkbox" name="order"  onClick={onChange}  />
                
            </div>
            
        </div>
       
        </div>
        <div className=" detail_bottom" id="detail_bt"> 
            <div className="detail_book_title"> services selected</div>
            <div className="detail_book_desc">you can add more or continue </div>
            <a href={'/booking'}><button className="detail_book_button">BOOK NOW</button></a>
           
            </div>
    </div>
   
    )
    }else{
        return(
            <div className="accordion">
            
                <div onClick={() => setActive(title)} className="accordionHeading">
                
                <p className="spacing"></p>{title}
    
                </div>

        <div className={(Active === title ? "show" : "" ) + " accordionContent"} >
           
            <div className="container">
            There is no services
                
            </div>
            
        </div>
       
        </div>
        )
    }
    
}
export default Accordion;