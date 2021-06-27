import React, { Component } from 'react';
import  './assets/dashboard.css';
import SideBar from './sidebar'

// const services=[
//     {
//         "_id": 1,
//         "name": "Hair removal",
//         "service":"Laser Hair Removal",
//         "price":"30",
//         "time":"60 to 90 minutes"

//     },
//     {
//         "_id": 2,
//         "name": "Anti Aging",
//         "service":"Laser Hair Removal",
//         "price":"30",
//         "time":"10 to 30 minutes"

//     },
//     {
//         "_id": 3,
//         "name": "Body Care",
//         "service":"Laser Hair Removal",
//         "price":"30",
//         "time":"30 to 50 minutes"

//     },
//     {
//         "_id": 4,
//         "name": "Cellulite and Stretch Marks",
//         "service":"Laser Hair Removal",
//         "price":"30",
//         "time":"20 to 40 minutes"

//     },
//  ] 


class Dashboard extends Component{
    constructor (props) {
        super(props);
        this.state = {
            today_services:[],
            myUser: localStorage.getItem('myUser')
        };
    }   
    OnToday=()=>{  
        this.setState({today_services:[{
            "_id": 1,
            "name": "Hair removal",
            "service":"Laser Hair Removal",
            "price":"30",
            "time":"60 to 90 minutes"
    
        },
        {
            "_id": 2,
            "name": "Anti Aging",
            "service":"Laser Hair Removal",
            "price":"30",
            "time":"10 to 30 minutes"
    
        },
        {
            "_id": 3,
            "name": "Body Care",
            "service":"Laser Hair Removal",
            "price":"30",
            "time":"30 to 50 minutes"
    
        },
        {
            "_id": 4,
            "name": "Cellulite and Stretch Marks",
            "service":"Laser Hair Removal",
            "price":"30",
            "time":"20 to 40 minutes"
    
        } ]})

    }

    UpComing=()=>{  
        this.setState({today_services:[{
            "_id": 1,
            "name": " UpcomingHair removal",
            "service":"Laser Hair Removal",
            "price":"30",
            "time":"60 to 90 minutes"
    
        },
        {
            "_id": 2,
            "name": "UpcomingHairAnti Aging",
            "service":"Laser Hair Removal",
            "price":"30",
            "time":"10 to 30 minutes"
    
        },
        {
            "_id": 3,
            "name": "UpcomingHairBody Care",
            "service":"Laser Hair Removal",
            "price":"30",
            "time":"30 to 50 minutes"
    
        },
        {
            "_id": 4,
            "name": "UpcomingHairCellulite and Stretch Marks",
            "service":"Laser Hair Removal",
            "price":"30",
            "time":"20 to 40 minutes"
    
        } ]})

    }


    render(){
      const   myUser= localStorage.getItem('myUser')
        
        if(this.state.myUser){
        return(
            <div>
               <div> <SideBar /></div>
               <div className="dashboard_title_before">  DASHBOARD</div>
                <div className="dashboard_title">  DASHBOARD</div>
                

                <div className="dashboard_content">
                    <div className="content_small">
                            <div className="card_small" > 
                                <div className="card_small_header">
                                <span style={{'padding':'15px'}}> BOOKING TODAY </span>
                                </div>
                                <div className="card_small_body">
                                    <p style={{'font-size':'90px','margin-top':'-1px','margin-left':'30px','font-family': "Times New Roman, Times, serif"}}>1</p>
                                    <p style={{'font-size':'20px','margin-top':'-50px','margin-left':'20px','color':'grey'}}>24-07-2019</p>
                                    <a><button className="view_btn">View >>  </button></a>

                                </div>
                            
                            
                            </div>
                            <div className="card_small"> 
                        <div className="card_small_header">
                           <span style={{'padding':'15px'}}> BOOKING TODAY </span>
                        </div>
                        <div className="card_small_body">
                            <p style={{'font-size':'90px','margin-top':'-1px','margin-left':'30px','font-family': "Times New Roman, Times, serif"}}>1</p>
                            <p style={{'font-size':'20px','margin-top':'-50px','margin-left':'20px','color':'grey'}}>24-07-2019</p>
                            <a><button className="view_btn">View >> </button></a>

                        </div>
                    
                    
                    </div>
                    <div className="card_small"> 
                        <div className="card_small_header">
                           <span style={{'padding':'15px'}}> BOOKING TODAY </span>
                        </div>
                        <div className="card_small_body">
                            <p style={{'font-size':'90px','margin-top':'-1px','margin-left':'30px','font-family': "Times New Roman, Times, serif"}}>1</p>
                            <p style={{'font-size':'20px','margin-top':'-50px','margin-left':'20px','color':'grey'}}>24-07-2019</p>
                            <a><button className="view_btn">View >> </button></a>

                        </div>
                    
                    
                    </div>
                    </div>
                   
                    <div className="card_big">
                        <div className="card_big_header">
                            <button className="dashboard_card_btn" style={{'margin-left':'30px','border-bottom':''}}>Previous </button>
                            <button className="dashboard_card_btn" style={{'border-bottom':''}} onClick={this.OnToday}>Today </button>
                            <button className="dashboard_card_btn" style={{'border-bottom':''}} onClick={this.UpComing}>Upcoming </button>
                        </div>
                        <div className="card_big_body">
                        <table className="card_table">
                                            <thead>
                                                <tr>
                                                    <th >Date</th>
                                                    <th >Service duration</th>
                                                    <th >Service name</th>
                                                    <th >Client</th>
                                                    <th ></th>
                                                </tr>
                                            </thead>
                                            {this.state.today_services.map((value)=>(
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        24-07-2019<br/>
                                                        13:10 pm
                                                    </td>
                                                    <td>{value.time}</td>
                                                    <td>{value.name}</td>
                                                    <td>
                                                        <span>
                                                            Client Name
                                                        </span>
                                                        
                                                    </td>
                                                    <td><span >
                                                            <a href="#" >Details</a>
                                                        </span></td>
                                                </tr>
                                            </tbody>
                                             ))}
                                        </table>


                        </div>

                    </div>
                    




                </div>
        

            </div>
        )
     }else{
    window.location.href = '/';


     }
    }
}export default Dashboard