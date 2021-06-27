import React ,{Component}from 'react';
import Adminbar from './AdminBar';
import  './assets/dashboardAdmin.css';
import { Checkbox, Collapse } from 'antd';
import { MDBDataTable, MDBDataTableV5 } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faPlusSquare } from '@fortawesome/free-solid-svg-icons';



class ControllServices extends Component{

    constructor(props){
        super(props)
        this.state = {
          dtEvents:[]
        }
    }
    
    componentDidMount() {
          this.getEvents();
    }
      
    getEvents= _ => {
          fetch(`http://localhost:4000/events`)
            .then(response => response.json())
            .then(response => this.setState({ dtEvents: response.data}))
            .catch(err =>console.error(err))
    }




    render(){

        const data2 ={
            columns: [
              
              {
                label: 'id',
                field: 'id',
                sort: 'asc',
                width: 150
              },
              {
                label: 'title',
                field: 'title',
                sort: 'asc',
                width: 270
              },
              {
                label: 'employee',
                field: 'employee',
                sort: 'asc',
                width: 200
              },
              {
                label: 'start',
                field: 'start',
                sort: 'asc',
                width: 100
              },
              {
                label: 'color',
                field: 'color',
                sort: 'asc',
                width: 150
              },
              {
                label:'',
                field:'details',
                sort:'asc',
                width:100
              }
            ],
            rows: [... this.state.dtEvents.map((data,i)=>(
              {
              
      
              id:data.id ,
              title:data.title,
              employee:data.employee,
              start:data.start,
              color: data.color,
              details:<a  href={`/adminDetails/1/services/${data.id}/${data.available}`}  style={{'font-size':'14px','color':'#DCC19B'}}>details</a>
      
      
      
            }
            ))
      
            ]
          }


        return(
            <div>
                <div><Adminbar /></div>
                <div className="data_table">
            
            
                <div id="data_table">
                
                <MDBDataTableV5 
                    
                    entriesOptions={[5,7,10 ]}
                    // checkbox
                    // headCheckboxID='id6'
                    // bodyCheckboxID='checkboxes6'
                    striped 
                    bordered
                    // multipleCheckboxes
                    searchTop
                    searchBottom={false}
                    small
                    data={data2}
                    
                    
                    />
                    
                </div>
            </div>

            </div>
        )
    }

}export default ControllServices