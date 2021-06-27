import React ,{Component}from 'react';
import axios from 'axios';


class TestEdit extends Component{
    constructor(props){
    super(props)

        this.state={
            selectEmp:[],
            id:2
        }
        this.renderEmp=this.renderEmp.bind(this);
    }


    componentDidMount() {
        this.getEvents();
        // this.getEmp();
      }
    
    getEvents= _ => {
        fetch(`http://localhost:4000/centers/${this.state.id}`)
        .then(response => response.json())
        .then(response => (this.setState({ selectEmp: response.data})),console.log(this.state.selectEmp))
        .catch(err =>console.error(err)) 

    // axios.get('/users/get-user',
    //   {
    //     "id":1
    //   }).then((response)=>{
    //   (
    //     this.setState({ selectEmp: response.data.data})
        
    //   )
      
    // })
    //   console.log(this.state.selectEmp)

    //     fetch(`/users/get-user/`, {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     id: 1,
        
    //   })
    // }).then(response => response.json())
    //     .then(response => (this.setState({ selectEmp: response.data.data})),console.log(this.state.selectEmp))
    //     .catch(err =>console.error(err))

    }
    renderEmp=(center_id,email,password,type,status)=>{
       return(
            <form className="modal_add-content animate" action="" >
                          <div className="modal_add_container"> 
                          <label className="add_label" for="uname"><b>Name</b></label>
                          <input className="add_input" type="text" placeholder="Enter Username" value={center_id}  name="uname" required></input>

                          <label className="add_label" for="position"><b>Email</b></label>
                          <input className="add_input" type="text" placeholder="Enter Email" name="position" value={email} required></input>
                          <label  className="add_label" for="Office"><b>Password</b></label>
                          <input className="add_input" type="text" placeholder="Enter password" name="Office" value={password} required/>
                          <label className="add_label" for="Age"><b>Type</b></label>
                          <input className="add_input"  type="text" placeholder="Enter Type" name="Age" value={type} required/>
                          <label className="add_label" for="date"><b> Status </b></label>
                          <input className="add_input"  type="text" placeholder="Enter Status" name="date" value={status} required/>
                          
                          <div className="btn_div">
                          <button  type="button" onClick={this.closeForm} className="cancelbtn">Cancel</button>
                        <button  className="add_btn" onClick={this.UpdateEmp}>Update</button>
                        </div>
                        
                          </div>
                          
                      </form> 
       )


    }

    render(){
        return(
            <div>
                {this.renderEmp}
                {this.state.selectEmp.map((data)=><form className="modal_add-content animate" action="" >
                          <div className="modal_add_container"> 
                          <label className="add_label" for="uname"><b>Name</b></label>
                          <input className="add_input" type="text" placeholder="Enter Username" value={data.center_name} name="uname" required></input>

                          <label className="add_label" for="position"><b>Email</b></label>
                          <input className="add_input" type="text" placeholder="Enter Email" name="position"  required></input>
                          <label  className="add_label" for="Office"><b>Password</b></label>
                          <input className="add_input" type="text" placeholder="Enter password" name="Office"  required/>
                          <label className="add_label" for="Age"><b>Type</b></label>
                          <input className="add_input"  type="text" placeholder="Enter Type" name="Age"  required/>
                          <label className="add_label" for="date"><b> Status </b></label>
                          <input className="add_input"  type="text" placeholder="Enter Status" name="date"  required/>
                          
                          <div className="btn_div">
                          <button  type="button"  className="cancelbtn">Cancel</button>
                        <button  className="add_btn" >Update</button>
                        </div>
                        
                          </div>
                          
                      </form>)}
                
            </div>
        )
    }

}
export default TestEdit;
