import React, { Component,useState ,useEffect} from 'react';
import AccordionStyle from './accordion/accordion';

import center from './images/center.jpg'
import center_detail1 from './images/center_detail1.jpg';
import logo_detail from './images/logo_detail.jpg';
import Tweet from './tweet';
import axios from 'axios';


function CenterDetails (props){

    

    const id=props.match.params.center_id;
    localStorage.setItem('center_id',id);
    const[centers,setCenter]=useState([]);



    useEffect(()=>{
        getCenter();
    })




    const getCenter= (variables) => {
        axios.post('/centers/get-center/',
      {
        id:id
      }).then((response)=>{
          
        // console.log(response),
        // var result=centers.concat(response.data.data);
        // console.log(result);
        setCenter(response.data.data.name);
          
        
        
      
      
    })
    }
    

    return(
        
        <div>
            {/* <p>ID : {props.match.params.center_id}</p> */}
            <img className="img_detail" src={center} />
            <p class="text_img"> WELCOME TO OUR CENTER </p>
            <p className="text_img_small">WELCOME TO OUR CENTER</p>
            <img className="logo_detail" src={logo_detail} />
            <table className="detail_table">
            <tr>
                    <th style={{'text-transfrom':'uppercase'}} id=""> {centers}</th>
                    <th id="">ABOUT {id} </th>
                    <th id=""> SERVICES </th>
                    <th id="">PORTFOLIO</th>
                </tr>

            </table>
            <p className="detail_services_opacity">SERVICES </p>
            <p className="detail_title">SERVICES </p>
            <div class="accordion_parag">
           <div><AccordionStyle /></div>
           {/* <div><AccordionStyle  id="2" title="Peeling" service=""  /></div>
           <div><AccordionStyle  id="3" title="Anti Aging" service="Laser Hair Removal" price="30" time="60"  /></div>
           <div><AccordionStyle title="Body Care "  service="Laser Hair Removal" price="30" time="60" /></div>
           <div><AccordionStyle title="Cellulite and Stretch Marks" service="Laser Hair Removal" price="30" time="60"  /></div>
           <div><AccordionStyle title="Eye  Care" service="Laser Hair Removal" price="30" time="60" /></div>
           <div><AccordionStyle title="Face Care" service="Laser Hair Removal" price="30" time="60"  /></div>
           <div><AccordionStyle title="Facials  " service="Laser Hair Removal" price="30" time="60" /></div>
           <div><AccordionStyle title="Nutrition "  service="Laser Hair Removal" price="30" time="60" /></div>
           <div><AccordionStyle title="Pigmentation " service="Laser Hair Removal" price="30" time="60" /></div>
           <div><AccordionStyle title="Slimming "  service="Laser Hair Removal" price="30" time="60" /></div>
           <div><AccordionStyle title="Teeth Whitening"  service="Laser Hair Removal" price="30" time="60" /></div>
           <div><AccordionStyle title="Vascular " service="Laser Hair Removal" price="30" time="60"  /></div> */}
           </div>
           

            
        </div>
        


    )
    
}
export default CenterDetails;