import React ,{useState, Component}from 'react';
import Tweet from './tweet';
import center1 from './images/center1.jpg';
import {CheckBox,CheckBox2} from './checkbox';
// import {browseHistory} from 'react-router';



class Home extends Component {
  
//   OnNavigateDetails() {
//     browseHistory.push('/center_details');
//   }



  state ={
    centers: []
  }

  componentDidMount() {
    this.getCenters();
  }

  getCenters= _ => {
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(response => this.setState({ centers: response.data}))
      .catch(err =>console.error(err))
  }

  renderCenter = ({center_id,center_name,center_desc,center_loc}) =><div className="centers" > 
    <div className="name" key={center_id}>{center_name}</div>
    <div className="img"><img src={center1} height="280px" width="360px"/></div>
    <div className="right">
    <div className="desc">{center_desc}</div>
    <div className="loc">{center_loc}</div>
   <a href={`/details/${center_id}`}><button className="select_btn" >SELECT CENTER</button></a>
    </div>
  
  </div>
  renderCenter_desc = ({center_id,center_desc}) => <div key={center_id}>{center_desc}</div>
  renderCenter_loc = ({center_id,center_loc}) => <div key={center_id}>{center_loc}</div>  
  render(){
  const {centers} = this.state;
  return (
    <div className='mid'>
      <div className="title_div"><p className="title">BEAUTY CENTERS</p></div>
      
      <div className="filter"><Tweet /></div>
      <div >
        <div > {centers.map(this.renderCenter)}</div>
        </div>
      {/* {users.map(user => (
          <Tweet name={user.name} message={user.message}/>
      )
      )} */}





    </div>
  );
}
}

export default Home;
