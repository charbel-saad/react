import React, { useState } from 'react'
import { Checkbox, Collapse } from 'antd';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


const lebanon=
[

    {"country_name":"akkar"
    ,
    
    "akkar":[ 
        {"_id": 1,"name": "Halba"},
        {"_id": 2,"name": "Bire"},
    {
        "_id": 3,
        "name": "Qoubaiyat"
    }]}
        ,{"country_name":"baalbek",
        "baalbek":[
            {
                "_id": 4,
                "name": "Baalbek"
            },
            {
                "_id": 5,
                "name": "Arsal"
            },
            {
                "_id": 6,
                "name": "Deit-el-Ahmar"
            },
            {
                "_id": 7,
                "name": "Majdloun"
            },
            {
                "_id": 8,
                "name": "Labweh"
            },
            {
                "_id": 9,
                "name": "Khrabieh"
            }
        ]
    
    }
]






const { Panel } = Collapse






function CheckBox2(props) {
    
const [Checked,setChecked] = useState([])
    const handleToggle=(value)=>{
            const currentIndex   =Checked.indexOf(value);
            const newChecked = [...Checked];

            if(currentIndex ===-1){
                newChecked.push(value)
            }else{
                newChecked.splice(currentIndex,1)
            }

            setChecked(newChecked);
            props.handleFilters(newChecked)



    }



    const renderCheckBox= (arr) =>{
        return(
    
            arr.map((value,index) =>(
                        <React.Fragment key={index}>
                        <div className="filter_name">
                            <Checkbox
                            onChange={()=>handleToggle(value.name)}
                            type="Checkbox"
                            value={value.name}
                            checked={Checked.indexOf(value.name) === -1 ? false : true}
                            
                            
                    />
                    <span >{value.name}</span></div>    
                    </React.Fragment>   
            
                    )
                    )
            
            )
        
    }
    const renderCheckBoxCountry = (filterArray) => filterArray.map((element)=>{
        //console.log(
           return(<Accordion   allowZeroExpanded>
                
           
            
           {/* {Object.keys(element).map((kadaa, index)=>{ */}
                 <AccordionItem >
                <AccordionItemHeading >
                <AccordionItemButton  className="cb_btn">
                  {/* {kadaa} */}{element.country_name}
                </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
           {renderCheckBox( element[element.country_name])}
            </AccordionItemPanel>
            </AccordionItem>
            
            {/* }) */}
               {/* } */}
                </Accordion>
               
            
            )

            // Object.keys(element).map((kadaa)=>{
            //     console.log(element[kadaa]);
            //     element[kadaa].map((value,index) =>(
            //                 <React.Fragment key={index}>
            //                 <div className="filter_name">
            //                     <Checkbox
            //                     onChange
            //                     type="Checkbox"
                                
            //             />
            //             <span >{value.name}</span></div>    
            //             </React.Fragment>   
                
            //             )
            //             )
            // })
        // element.forEach
        // (test => {
        //     kadaa.map((value,index) =>(
        //         <React.Fragment key={index}>
        //         <div className="filter_name">
        //             <Checkbox
        //             onChange
        //             type="Checkbox"
                    
        //     />
        //     <span >{value.name}</span></div>    
        //     </React.Fragment>   
    
        //     )
        //     )
        // }
        // )
    }
    )
            
        

    

    return (
        
    <div className="cb_style">
        
            {renderCheckBoxCountry(lebanon)}
            


            {/* <AccordionItem >
            <AccordionItemHeading >
                
                <AccordionItemButton className="cb_btn">
                    Baalbek-Hermel
                </AccordionItemButton>
               
            </AccordionItemHeading>
            <AccordionItemPanel>
            {renderCheckBoxBaalbek()}
            </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem >
            <AccordionItemHeading >
                
                <AccordionItemButton className="cb_btn">
                    Baalbek-Hermel
                </AccordionItemButton>
               
            </AccordionItemHeading>
            <AccordionItemPanel>
            {renderCheckBoxBaalbek()}
            </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem >
            <AccordionItemHeading >
                
                <AccordionItemButton className="cb_btn">
                    Baalbek-Hermel
                </AccordionItemButton>
               
            </AccordionItemHeading>
            <AccordionItemPanel>
            {renderCheckBoxBaalbek()}
            </AccordionItemPanel>
            </AccordionItem> */}









{/* 
        </Accordion> */}

    </div>
    )
    
}

export  {CheckBox2}