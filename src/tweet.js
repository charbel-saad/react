import React ,{useState} from 'react';
import './App.css' ;
import {CheckBox, CheckBox2,Loopthroughcities} from './checkbox'
//import {Collapse ,Button} from 'reactstrap';


function Tweet(){
    
    // const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    

    return(
        <div className='filter'>
            
            <table className="table">
                <tr>
                    <th id="f-small">FILTERS</th>
                    <th id="f-large"></th>
                    <th id="f-small-end"></th>
                </tr>
                <tr>
                    <td></td>
                    <td id="area">AREA</td>
                    <td id="f-small-end"></td>
                </tr>

                <tr>
                    <td></td>
                    <td><Loopthroughcities
                        
                            /></td>
                    <td id="f-small-end"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><CheckBox2 /></td>
                    <td id="f-small-end"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><span className="symbol">+</span>AREA</td>
                    <td id="f-small-end"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><span className="symbol">+</span>AREA</td>
                    <td id="f-small-end"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><span className="symbol">+</span>AREA</td>
                    <td id="f-small-end"></td>
                </tr>



            </table>
            

        </div>
    )
}
export default Tweet;