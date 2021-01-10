import React, { Component,useState } from 'react';
import Accordion from './accordion/accordion';
import center_detail1 from './images/center_detail1.jpg';
import logo_detail from './images/logo_detail.jpg';
import Tweet from './tweet';


function CenterDetails (props){

    
    const [Active,setActive] = useState();
    const id=props.match.params.center_id;
    
    
    return(
        
        <div>
            {/* <p>ID : {props.match.params.center_id}</p> */}
            <img className="img_detail" src={center_detail1} />
            <p class="text_img"> WELCOME TO OUR CENTER </p>
            <img className="logo_detail" src={logo_detail} />
            <table className="detail_table">
            <tr>
                    <th id="">TEST CENTER {props.match.params.center_id}</th>
                    <th id="">ABOUT {id} </th>
                    <th id=""> SERVICES </th>
                    <th id="">PORTFOLIO</th>
                </tr>

            </table>
            <p className="detail_services_opacity">SERVICES </p>
            <p className="detail_title">SERVICES </p>
            <div class="accordion_parag">
           <div><Accordion title="Hair Removal" service="Laser Hair Removal" price="30" time="60" Active={Active} setActive={setActive} /></div>
           <div><Accordion title="Peeling" service="" price="25" time="50" Active={Active} setActive={setActive} /></div>
           <div><Accordion title="Anti Aging" service="Laser Hair Removal" price="30" time="60" Active={Active} setActive={setActive} /></div>
           <div><Accordion title="Body Care "  service="Laser Hair Removal" price="30" time="60"Active={Active} setActive={setActive} /></div>
           <div><Accordion title="Cellulite and Stretch Marks" service="Laser Hair Removal" price="30" time="60" Active={Active} setActive={setActive} /></div>
           <div><Accordion title="Eye  Care" service="Laser Hair Removal" price="30" time="60" Active={Active} setActive={setActive} /></div>
           <div><Accordion title="Face Care" service="Laser Hair Removal" price="30" time="60" Active={Active} setActive={setActive} /></div>
           <div><Accordion title="Facials  " service="Laser Hair Removal" price="30" time="60" Active={Active} setActive={setActive} /></div>
           <div><Accordion title="Nutrition "  service="Laser Hair Removal" price="30" time="60"Active={Active} setActive={setActive} /></div>
           <div><Accordion title="Pigmentation " service="Laser Hair Removal" price="30" time="60" Active={Active} setActive={setActive} /></div>
           <div><Accordion title="Slimming "  service="Laser Hair Removal" price="30" time="60"Active={Active} setActive={setActive} /></div>
           <div><Accordion title="Teeth Whitening"  service="Laser Hair Removal" price="30" time="60"Active={Active} setActive={setActive} /></div>
           <div><Accordion title="Vascular " service="Laser Hair Removal" price="30" time="60" Active={Active} setActive={setActive} /></div>
           </div>
           

            
        </div>
        


    )
    
}
export default CenterDetails;