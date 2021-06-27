import React ,{useState} from 'react';
import './App.css' ;
import { CheckBox2,Loopthroughcities} from './checkbox'
import { Checkbox } from 'antd';
//import {Collapse ,Button} from 'reactstrap';


function Tweet(){
    
    // const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    const [Filters,setFilters] = useState({
        lebanon: [],
    })

    const showFilteredResults =(filters)=>{
        
    }




   const handleFilters=(filters,category)=>{
        console.log(filters);
        const newFilters = {... Filters}
        newFilters[category] = filters



        showFilteredResults(newFilters)
        setFilters(newFilters)

        }
    return(
        <div className='filter'>
            
            <div className="table">
                
                <p id="f-small">FILTERS</p>
                <div>
                <CheckBox2 
                          handleFilters={filters=> handleFilters(filters,"lebanon")}
                />




                </div>
                


            </div>
            

        </div>
    )
}
export default Tweet;