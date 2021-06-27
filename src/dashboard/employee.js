import React ,{Component}from 'react';
import SideBar from './sidebar'
import  './assets/data_table.css';
import { Checkbox, Collapse } from 'antd';
import { useHistory } from "react-router";

import { MDBDataTable, MDBDataTableV5 } from 'mdbreact';
import 'bootstrap-css-only/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Title from 'antd/lib/skeleton/Title';
import axios from 'axios';




class  EmployeePage extends Component {

  constructor(props){
    super(props)
    this.state = {
      dtEvents:[],
      id:1,
      selectEmp:[],
      UpName:'chrbll',
      UpEmail:'',
      UpPass:'',
      UpType:'',
      Upstatus:'',

      newName:'',
      newEmail:'',
      newpass:'',
      newType:'',
      newStatus:'',
    }
    this.handelChangeChexbox=this.handelChangeChexbox.bind(this);
    this.UpdateEmp=this.UpdateEmp.bind(this);
    this.addEmp=this.addEmp.bind(this);
  }

    componentDidMount() {
      this.getEvents();
      // this.getEmp();
    }
  
    getEvents= _ => {
      fetch('https://omnielle.com/api/web/users/get-users/')
        .then(response => response.json())
        .then(response => this.setState({ dtEvents: response.data}))
        .catch(err =>console.error(err))
    }


  
    // getEmp= _ => {
    //   fetch(`http://localhost:4000/centers/${this.state.id}`)
    //     .then(response => response.json())
    //     .then(response => (this.setState({ selectEmp: response.data})),console.log(this.state.selectEmp))
    //     .catch(err =>console.error(err)) 
    // }




  openForm=()=>{
    var modal = document.getElementById('id01');
    modal.style.display='block'
    

  }
  closeForm=()=>{
    var modal = document.getElementById('id01');
    modal.style.display='none'
  }
  openFormAdd=()=>{
    var modal = document.getElementById('id02');
    modal.style.display='block'
    

  }
  closeFormAdd=()=>{
    var modal = document.getElementById('id02');
    modal.style.display='none'
  }
  handelChangeChexbox(event){
    const target=event.target;
    var value = target.value;
    if(target.checked){
      this.state.id=value;
      console.log(this.state.id);
      
      // fetch(`http://localhost:4000/centers/${this.state.id}`)
      //   .then(response => response.json())
      //   .then(response => (this.setState({ selectEmp: response.data})),console.log(this.state.selectEmp))
      //   .catch(err =>console.error(err)) 


      

      axios.post('/users/get-user',
      {
        id:this.state.id
      }).then((response)=>{
      this.state.selectEmp=[];
        // console.log(response),
        var result=this.state.selectEmp.concat(response.data.data);
        console.log(result);
        this.setState({ UpName: response.data.data.name,UpEmail: response.data.data.email,UpPass: response.data.data.password,
          UpType: response.data.data.type,Upstatus: response.data.data.status
        }
          
        )
        
      
      
    })
    //   console.log(this.state.selectEmp)

    }
    
  }

  UpdateEmp(e){
    console.log(this.state.UpName);
    axios.post('/users/save-user/',{
      id:this.state.id,
      name:this.state.UpName,
      email:this.state.UpEmail,
      password:this.state.UpPass,
      type:this.state.UpType,
      status:this.state.Upstatus
  
      }).then((response)=>{
        alert("update done ");
       
        window.location.reload(false);
       
      }).catch((error)=>{
        console.log(error);
      })
    



  }

  addEmp(e){
    
    axios.post('/users/save-user/',{
    
    name:this.state.newName,
    email:this.state.newEmail,
    password:this.state.newpass,
    type:this.state.newType,
    status:this.state.newStatus

    }).then((response)=>{
     // alert("asdasd");
      window.location.reload(false);
     // if(response.data.responseCode){
     //   console.log(response);
        //localStorage.setItem('myUser',response.data.data.name)
              //    if(localStorage.getItem('myUser')){
//history.push('/EmployeePage');
//window.open('/EmployeePage');
              //    }
    
    
     // }else{
     //   alert('wrong email or password ');
    //  }
    }).catch((error)=>{
      console.log(error);
    })
    

  };
  
  // renderEmp=({user_id,name,email,password,type,status})=>{
  //   return<div>
  //     <form className="modal_add-content animate" action="" >
  //             <div className="modal_add_container"> 
  //             <label className="add_label" for="uname"><b>Name</b></label>
  //             <input className="add_input" type="text" placeholder="Enter Username" value={name}  name="uname" required></input>

  //             <label className="add_label" for="position"><b>Email</b></label>
  //             <input className="add_input" type="text" placeholder="Enter Email" name="position" value={email} required></input>
  //             <label  className="add_label" for="Office"><b>Password</b></label>
  //             <input className="add_input" type="text" placeholder="Enter password" name="Office" value={password} required/>
  //             <label className="add_label" for="Age"><b>Type</b></label>
  //             <input className="add_input"  type="text" placeholder="Enter Type" name="Age" value={type} required/>
  //             <label className="add_label" for="date"><b> Status </b></label>
  //             <input className="add_input"  type="text" placeholder="Enter Status" name="date" value={status} required/>
              
  //             <div className="btn_div">
  //             <button  type="button" onClick={this.closeForm} className="cancelbtn">Cancel</button>
  //            <button  className="add_btn" onClick={this.UpdateEmp}>Update</button>
  //            </div>
             
  //             </div>
              
              
              

              
              
              
              
  //             </form> 




  //   </div>

  // }


    
render(){
    const data2 ={
      columns: [
        {
          label: '',
          field: 'check',
          width:100
        },
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
        }
      ],
      rows: [... this.state.dtEvents.map((data,i)=>(
        {
        check:<input 
        value={data.user_id}
        onChange={this.handelChangeChexbox}
        type="Checkbox" />,

        id:data.user_id ,
        title:data.name,
        employee:data.email,
        start:data.password,
        color: data.created_at



      }))

      ]
    }
    
  return (
      <div>   
          <div> <SideBar /></div>
            <div className="dashboard_title_before">  Employee</div>
            <div className="dashboard_title">  Employee</div>



            <div id="id01" className="modal_add">
                  
                    <div>
                      <div className="modal_add-content animate" >
                          <div className="modal_add_container"> 
                          <label className="add_label" for="uname"><b>Name</b></label>
                          <input className="add_input" type="text" placeholder="Enter Username" value={this.state.UpName} onChange={(e)=>{this.setState({UpName:e.target.value})}} name="uname" required></input>

                          <label className="add_label" for="position"><b>Email</b></label>
                          <input className="add_input" type="text" placeholder="Enter Email" onChange={(e)=>{this.setState({UpEmail:e.target.value})}} name="position" value={this.state.UpEmail} required></input>
                          <label  className="add_label" for="Office"><b>Password</b></label>
                          <input className="add_input" type="text" placeholder="Enter password" onChange={(e)=>{this.setState({UpPass:e.target.value})}} name="Office" value={this.state.UpPass} required/>
                          <label className="add_label" for="Age"><b>Type</b></label>
                          <input className="add_input"  type="text" placeholder="Enter Type" onChange={(e)=>{this.setState({UpType:e.target.value})}} name="Age" value={this.state.UpType} required/>
                          <label className="add_label" for="date"><b> Status </b></label>
                          <input className="add_input"  type="text" placeholder="Enter Status" onChange={(e)=>{this.setState({Upstatus:e.target.value})}} name="date" value={this.state.Upstatus} required/>
                          
                          <div className="btn_div">
                          <button  type="button" onClick={this.closeForm} className="cancelbtn">Cancel</button>
                        <button  className="add_btn" onClick={this.UpdateEmp}>Update</button>
                        </div>
                        
                          </div>
                          
                      </div> 

                    </div>
                  )

            </div>

            <div id="id02" className="modal_add">
            <div>
      <form className="modal_add-content animate" action="" method="post">
              <div className="modal_add_container"> 
              <label className="add_label" for="uname"><b>Name</b></label>
              <input className="add_input" type="text" placeholder="Enter Username"  onChange={(e)=>{this.setState({newName:e.target.value})}} name="name" required></input>

              <label className="add_label" for="position"><b>Email</b></label>
              <input className="add_input" type="text" placeholder="Enter Email" onChange={(e)=>{this.setState({newEmail:e.target.value})}} name="email" required/>
              <label  className="add_label" for="Office"><b>Password</b></label>
              <input className="add_input" type="password" placeholder="Enter Password" onChange={(e)=>{this.setState({newpass:e.target.value})}} name="password" required/>
              <label className="add_label" for="Age"><b>type</b></label>
              <input className="add_input"  type="text" placeholder="Enter type" onChange={(e)=>{this.setState({newType:e.target.value})}} name="type" required/>
              <label className="add_label" for="date"><b> Status </b></label>
              <input className="add_input"  type="text" placeholder="Enter status" onChange={(e)=>{this.setState({newStatus:e.target.value})}} name="status" required/>
              
              <div className="btn_div">
              <button  type="button" onClick={this.closeFormAdd} className="cancelbtn">Cancel</button>
             <button  className="add_btn" onClick={this.addEmp} type="submit">Add</button>
             </div>
             
              </div>
              </form>
              </div>
                  

            </div>
            
            <div className="data_table">
            
            
                <div id="data_table">
                <div className="data_table_button">
                    <button onClick={this.openFormAdd} ><FontAwesomeIcon icon={faPlusSquare} style={{"color":"white",'font-size':'25px'}} /></button>
                    <button onClick={this.openForm}><FontAwesomeIcon icon={faEdit} style={{"color":"white",'font-size':'25px'}} /></button>
                    <button><FontAwesomeIcon icon={faTrash} style={{"color":"white",'font-size':'25px'}} /></button>
                </div>
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
  );
}   






}

export default EmployeePage;