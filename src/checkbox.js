import React, { useState } from 'react'
import { Checkbox, Collapse } from 'antd';



const lebanon=
[
{
        "akkar":[ 
            {"_id": 1,"name": "Halba"},
            {"_id": 2,"name": "Bire"},
        {
            "_id": 3,
            "name": "Qoubaiyat"
        }],
        "baalbek":[
            {
                "_id": 1,
                "name": "Baalbek"
            },
            {
                "_id": 2,
                "name": "Arsal"
            },
            {
                "_id": 3,
                "name": "Deit-el-Ahmar"
            },
            {
                "_id": 4,
                "name": "Majdloun"
            },
            {
                "_id": 5,
                "name": "Labweh"
            },
            {
                "_id": 6,
                "name": "Khrabieh"
            }
        ]
    
    }
]



const akkar = [
    {
        "_id": 1,
        "name": "Halba"
    },
    {
        "_id": 2,
        "name": "Bire"
    },
    {
        "_id": 3,
        "name": "Qoubaiyat"
    }
]


const baalbek = [
    {
        "_id": 1,
        "name": "Baalbek"
    },
    {
        "_id": 2,
        "name": "Arsal"
    },
    {
        "_id": 3,
        "name": "Deit-el-Ahmar"
    },
    {
        "_id": 4,
        "name": "Majdloun"
    },
    {
        "_id": 5,
        "name": "Labweh"
    },
    {
        "_id": 6,
        "name": "Khrabieh"
    }
]


const { Panel } = Collapse

function Loopthroughcities(){
    return(
    
    lebanon.map((value,index)=>(
    <span key={index}>{value.name}</span>
    ))
    
    )
} 







function CheckBox(props) {

const [Checked,setChecked] = useState([])

const renderCheckBoxAkkar = () => akkar.map((value,index) =>(
    <React.Fragment key={index}>
        <div className="filter_name">
            <Checkbox
            type="Checkbox"
            
       />
       <span >{value.name}</span></div>
    </React.Fragment>
))

    return (
        <div>
            <Collapse defaultActiveKey={['0']} >
            <Panel header="Akkar" key="1">
                    {renderCheckBoxAkkar()}
                </Panel>

            </Collapse>


        </div>
        
    )
}



function CheckBox2() {
    // return(
    // //     <div>
    // //     {Object.keys(lebanon).map((key) => {
    // //        return (
    // //          <div key={key}>
    // //             <h1>{key}</h1>
    // //             {lebanon[key].map((dataItem) => {
    // //               return (
    // //                <span key={dataItem.id}>{dataItem.name}</span>
    // //               )
    // //              })}
    // //          </div>
    // //        )
    // //      })}
    // //    </div>
    // )

    const renderCheckBoxBaalbek = () => lebanon.map((value,index) =>(
        
        <React.Fragment key={index}>
            <div className="filter_name">
                <Checkbox
                onChange
                type="Checkbox"
                
           />
           <span >{value['akkar'].name}</span></div>
        </React.Fragment>
    ))

    return (
        
        <div>
            <script>console.log(value)</script>
            <Collapse defaultActiveKey={['0']} >
            <Panel header="Baalbek-hermel" key="1">
                   {renderCheckBoxBaalbek()}
                </Panel>

            </Collapse>


        </div>
    )
    
}

export  {CheckBox,CheckBox2,Loopthroughcities}