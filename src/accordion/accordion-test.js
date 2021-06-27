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
var count =0;

const AccordionStyle =({id,title,service,time,price, isChecked}) =>{
    var val=[];
     isChecked =false;
     
     function onChange(event) {
        if(isChecked ==false){
            isChecked = true;
            
            var element = document.getElementById("detail_bt");
            element.classList.add("showBottom");
            console.log(event.target.value);
            val[event.value]=event.value;
            console.log(val);
            console.log(count);
            count ++;
            console.log(isChecked);
            console.log(count);
            return (count);
            
        }else if(count >=0 && isChecked ==true){
            isChecked = false;
               
            count --;
            console.log(isChecked);
            console.log(count);
            if(count<=0){
                var element = document.getElementById("detail_bt");
            element.classList.remove("showBottom");
            }
         
        }
    }
    
   if (service !="") {
       
   
    return(
     
    <div >
         <Accordion className="accordion_style" style={{width: '600px ' ,'margin-left':'800px'}} allowZeroExpanded>
                
                <AccordionItem >
            <AccordionItemHeading >
                <AccordionItemButton>
                {title}<span className="detail_id">{id}</span>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel >
            <div className="detail_service">{service}</div><span className="detail_time"> {time} minutes </span>
                <span className="detail_price">{price}$</span><input className="detail_cb" type="checkbox" value={id} name="order" onClick={onChange}/>
            </AccordionItemPanel>
                    </AccordionItem>
            </Accordion>




        <div className=" detail_bottom" id="detail_bt"> 
            <div className="detail_book_title"> {count}services selected</div>
            <div className="detail_book_desc">you can add more or continue </div>
            <a href={'/booking'}><button className="detail_book_button">BOOK NOW</button></a>
           
        </div>

    </div>
   
    )
    }else{
        return(
           
         <Accordion className="accordion_style" style={{width: '600px ' ,'margin-left':'800px'}} allowZeroExpanded>
                
                <AccordionItem >
            <AccordionItemHeading className="">
                <AccordionItemButton>
                    {title}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            There is no services
            </AccordionItemPanel>
                    </AccordionItem>
            </Accordion>
       
        
        )
    }
    
}
export default AccordionStyle;